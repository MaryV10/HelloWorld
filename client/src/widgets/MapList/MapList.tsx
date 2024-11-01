import { PlaceItem } from "@/entities/place";
import { Clusterer, Map } from "@pbe/react-yandex-maps";
import { isMobile } from "react-device-detect";
import { useEffect, useRef, useState } from "react";
import styles from "./MapList.module.css";
import ModalWindow from "@/shared/ui/Modal/Modal";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";
import { addPlace, getApprovedPlaces } from "@/entities/place/api/placeThunks";
import Sidebar from "../Sidebar/Sidebar";
import { TagSelector } from "../TagSelector";
import { getAllTags } from "@/entities/tag/api/tagThunks";
import SidebarMobile from "../SidebarMobile/SidebarMobile";
import { Upload } from "antd";
import { notification } from 'antd';

import { Button as UploadButton } from "antd";
import { CloudUploadOutlined } from "@ant-design/icons";
import { UploadChangeParam } from "antd/es/upload";
import TagSelectorMobile from "../TagSelectorMobile/TagSelectorMobile";

interface YMapsMouseEvent {
  get: (key: string) => {
    originalEvent: {
      button: number;
      preventDefault: () => void;
    };
    coords: [number, number];
  };
}

function MapList() {
  const [title, setTitle] = useState("");
  // const [photo, setPhoto] = useState("");
  const [description, setDescription] = useState("");
  const [modalActive, setModalActive] = useState(false);
  const [isLongTouch, setIsLongTouch] = useState(false);
  const [search, setSearch] = useState("");
  const [coords, setCoords] = useState<[number, number] | null>(null);

  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const [file, setFile] = useState<File | null>(null);
  const [pressTimeStart, setPressTimeStart] = useState(0);



  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const places = useAppSelector((state) => state.place.approvedPlaces);
  const tags = useAppSelector((state) => state.tag.tagList);
  const dispatch = useAppDispatch();

  const handleFileChange = (info: UploadChangeParam) => {
    const file = info.fileList[0].originFileObj;
    setFile(file as File);
  };

  useEffect(() => {
    dispatch(getApprovedPlaces());
    dispatch(getAllTags());
  }, [dispatch]);

  const selectedTagIds = selectedTags.map(Number);

  const filteredPlaces = places.filter(
    (place) =>
      place.title.toLowerCase().includes(search.toLowerCase()) &&
      selectedTagIds.every((tagId) =>
        place.tags.some((tag) => tag.id === tagId)
      )
  );

  const handleMouseDown = (e: YMapsMouseEvent) => {
    const originalEvent = e.get("domEvent").originalEvent;
    setPressTimeStart(Date.now()); // Запоминаем время нажатия
    // console.log(e);
    // console.log(originalEvent);
    
    
    if (originalEvent.button === 2) {
      originalEvent.preventDefault();

      timerRef.current = setTimeout(() => {
        setIsLongTouch(true);
        const coordinates = e.get("coords") as unknown as [number, number];
        setCoords(coordinates);
        setModalActive(true);
      }, 1000);


    }
  };

  const handleMouseUp = (e: YMapsMouseEvent) => {
    const touchEndTime = Date.now(); // Запоминаем время окончания нажатия
    const duration = touchEndTime - pressTimeStart; // Вычисляем длительность нажатия
    setPressTimeStart(0);
    
    if (timerRef.current) {
      clearTimeout(timerRef.current);

      timerRef.current = null;
    }

    if(isMobile && duration > 1000) {
      const coordinates = e.get("coords") as unknown as [number, number];
      setCoords(coordinates);
      setModalActive(true);

    }

    if (isLongTouch) {
      setIsLongTouch(false);
    }
  };



  

  const onSubmitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData();
    if (file) {
      formData.append("image", file);
      }
    if (coords) {
      try {

        if (title.trim()==='' || description.trim() ===''|| !file) {
          notification.error(     {message: 'Ошибка',  
            description: 'Введите название, описание и загрузите фото'} )
            return
        }

        await dispatch(
          addPlace({
            formData,
            title,
            description,
            longitude: String(coords[1]),
            width: String(coords[0]),
            tags: selectedTags,
          })
        );
      
        setModalActive(false);
        setTitle("");
        setDescription("");
        // setPhoto("");
        setCoords(null);
        setSelectedTags([]);
        setModalActive(false);
        notification.info(     {message: 'Внимание!',  
          description: 'Новая локация будет добавлена на карту после проверки модераторами платформы.'} )
      } catch (error) {
        console.error("Ошибка при добавлении места или фото:", error);
      }
    }
  };

  const renderContent = () => {
    if (isMobile) {

      return <div >
        <div className={styles.bottomBar}>
        <input 
          className={styles.input}
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Поиск..."
        />

<div className={styles.tags}>
        <TagSelectorMobile  tags={tags} onTagSelect={setSelectedTags} />
      </div>
      </div>
        <SidebarMobile places={filteredPlaces}/>
        </div>;

    }

    return (
      <>
        <div className={styles.sidebar}>
          <Sidebar places={filteredPlaces} />
        </div>

        <div className={styles.leftbar}>
          <input
            className={styles.input}
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Поиск..."
          />
          <div className={styles.tags}>
            <TagSelector tags={tags} onTagSelect={setSelectedTags} />
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className={styles.navbar}></div>

      <div className={styles.mapContainer} style={{ height: "100%" }}>
        <Map 
          defaultState={{ center: [59.95, 30.3], zoom: 9 }}
          width={"100%"}
          style={{ height: "calc(100vh)", marginTop: "" }}
          
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          <Clusterer
            options={{
              preset: "islands#blueRunCircleIcon",
              groupByCoordinates: false,
            }}
          >
            {filteredPlaces.map((place) => (
              <PlaceItem
                key={place.id}
                index={place.id}
                coordinates={[Number(place.width), Number(place.longitude)]}
                title={place.title}
                Photos={place.Photos}
              />
            ))}
          </Clusterer>
        </Map>
        <ModalWindow
          active={modalActive}
          onToggle={() => setModalActive(false)}
        >
          {modalActive && (
            <form
              style={{ display: "flex", flexDirection: "column", gap: "20px", width: "70vw" }}
              onSubmit={onSubmitHandler}
            >
              <div>
                <TagSelector tags={tags} onTagSelect={setSelectedTags} />
              </div>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Название места"
              />
              {/* <input
                type="text"
                required
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
                placeholder="Фото"
              /> */}
              <Upload
              maxCount={1}
              style={{width: '100px'}}
                onChange={handleFileChange}
                listType="picture"
                beforeUpload={() => false}
              >
                <UploadButton icon={<CloudUploadOutlined />}  style={{ borderRadius: '10px' }}>
                  Нажмите для згрузки
                </UploadButton>
              </Upload>
              <textarea
                className={styles.textarea}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Описание места"
              />

              <button style={{ color: "white" }} type="submit">
                Создать место
              </button>
            </form>
          )}
        </ModalWindow>
      </div>

      <div>{renderContent()}</div>
    </>
  );
}

export default MapList;
