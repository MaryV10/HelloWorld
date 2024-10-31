import { PlaceItem } from "@/entities/place";
import { Clusterer, Map } from "@pbe/react-yandex-maps";
import {isMobile} from 'react-device-detect';
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
import { Button as UploadButton } from "antd";
import { CloudUploadOutlined } from "@ant-design/icons";
import { UploadChangeParam } from "antd/es/upload";


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

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const places = useAppSelector((state) => state.place.approvedPlaces);
  const tags = useAppSelector((state) => state.tag.tagList);
  const dispatch = useAppDispatch();

 



  const handleFileChange = (info: UploadChangeParam) => {
    const file = info.fileList[0].originFileObj;
    setFile(file as File);

    // Обновляем formDataRef, добавляя выбранный файл
    // if (file) {
    //   formDataRef.current.set("image", file);
    //   console.log("Updated formData with file:", formDataRef.current);
    // }
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



  const handleMouseUp = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);

      timerRef.current = null;
    }

    if (isLongTouch) {
      setIsLongTouch(false);
    }
  };

  const onSubmitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData();
    if (file) {
    formData.append("image", file)
    console.log(file,'file');
    
    }
    // formData.append("description", description);
    // formData.append("width", String(coords[0]));
    // formData.append("longitude", String(coords[1]));
    // formData.append("tags", selectedTags);
    if (coords) {
      try {

        await dispatch(
          addPlace({formData, title, description, longitude: String(coords[1]), width: String(coords[0]), tags: selectedTags})
        )
        //         const newPlace = await dispatch(
        //   addPlace(formData)
        // ).unwrap();

        // console.log(photo,newPlace.id, "imageUrl");

        // await dispatch(
        //   addPhoto({ imageUrl: file, placeId: newPlace.id })
        // ).unwrap();

        setModalActive(false);
        setTitle("");
        setDescription("");
        // setPhoto("");
        setCoords(null);
        setSelectedTags([]);
        setModalActive(false);
      } catch (error) {
        console.error("Ошибка при добавлении места или фото:", error);
      }
    }
  };
         

  const renderContent = () => {
    if (isMobile) {
      return <div>
        <div className={styles.bottomBar}>
        <input 
          className={styles.input}
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Поиск..."
        />

<div className={styles.tags}>
        <TagSelector  tags={tags} onTagSelect={setSelectedTags} />
      </div>
      </div>
        <SidebarMobile places={filteredPlaces}/></div>;
    }

    return  (
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
  <TagSelector  tags={tags} onTagSelect={setSelectedTags} />
</div>

</div>
</>)
  }


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
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
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
                onChange={handleFileChange}
                listType="picture"
                beforeUpload={() => false}
              >
                <UploadButton icon={<CloudUploadOutlined />}>
                  Click to Upload
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
