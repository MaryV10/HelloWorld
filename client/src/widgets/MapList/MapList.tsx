import { PlaceItem } from "@/entities/place";
import { Clusterer, Map } from "@pbe/react-yandex-maps";
import { useEffect, useRef, useState } from "react";
import styles from "./MapList.module.css";
import ModalWindow from "@/shared/ui/Modal/Modal";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";
import { addPlace, getApprovedPlaces } from "@/entities/place/api/placeThunks";

import { addPhoto } from "@/entities/photo/api/photoThunks";

import Sidebar from "../Sidebar/Sidebar";
import { TagSelector } from "../TagSelector";
import { getAllTags } from "@/entities/tag/api/tagThunks";

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
  const [photo, setPhoto] = useState("");
  const [description, setDescription] = useState("");
  const [modalActive, setModalActive] = useState(false);
  const [isLongTouch, setIsLongTouch] = useState(false);
  const [search, setSearch] = useState("");
  const [coords, setCoords] = useState<[number, number] | null>(null);

  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const places = useAppSelector((state) => state.place.approvedPlaces);
  const tags = useAppSelector((state) => state.tag.tagList);
  const dispatch = useAppDispatch();
 
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
    if (coords) {
      try {
        const newPlace = await dispatch(
          addPlace({
            title,
            description,
            width: String(coords[0]),
            longitude: String(coords[1]),
            tags: selectedTags,
          })
        ).unwrap();

        
        await dispatch(
          addPhoto({ imageUrl: photo, placeId: newPlace.id })
        ).unwrap();

        setModalActive(false);
        setTitle("");
        setDescription("");
        setPhoto("");
        setCoords(null);
        setSelectedTags([]);
        setModalActive(false);
      } catch (error) {
        console.error("Ошибка при добавлении места или фото:", error);
      }
    }
  };
         

  return (
    <>
      <div className={styles.navbar}></div>

      <div className={styles.mapContainer} style={{ height: "100%" }}>
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
            
            <form style={{ display: "flex", flexDirection: "column", gap: "20px" }} onSubmit={onSubmitHandler}>
              <div >
                <TagSelector  tags={tags} onTagSelect={setSelectedTags} />
              </div>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Название места"
              />
              <input
                type="text"
                required
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
                placeholder="Фото"
              />
              <textarea
                className={styles.textarea}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Описание места"
              />
              
              <button style={{color: "white"}} type="submit">Создать место</button>
            </form>
          )}
        </ModalWindow>
      </div>
      <div className={styles.sidebar}>
        <Sidebar places={filteredPlaces} />
      </div>

      
    </>
  );
}

export default MapList;
