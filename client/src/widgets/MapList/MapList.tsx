import { PlaceItem } from "@/entities/place";
import { Clusterer, Map } from "@pbe/react-yandex-maps";
import { useEffect, useRef, useState } from "react";
import styles from "./MapList.module.css";
import ModalWindow from "@/shared/ui/Modal/Modal";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";
import { addPlace, getApprovedPlaces } from "@/entities/place/api/placeThunks";
import Sidebar from "../Sidebar/Sidebar";



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
const [description, setDescription] = useState("");
const [modalActive, setModalActive] = useState(false);
  const [isLongTouch, setIsLongTouch] = useState(false);
  const [search, setSearch] = useState("")
  const [coords, setCoords] = useState<[number, number] | null>(null);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const places = useAppSelector((state)=> state.place.places)
  const dispatch = useAppDispatch();



  useEffect(() => {
    dispatch(getApprovedPlaces())
  }, [dispatch]);

  const filteredPlaces = places.filter((place) => place.title.toLowerCase().includes(search.toLowerCase()))
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
      timerRef.current = null;}
      
    if (isLongTouch) {
      setIsLongTouch(false);
      
    }
  };

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (coords) {
      dispatch(
        addPlace({
          title,
          description,
          width: String(coords[0]),
          longitude: String(coords[1]),
        })
      );
      setModalActive(false);
      setTitle("");
      setDescription("");
      setCoords(null);
    }
  };




  return (
    <>
   
    <div className={styles.mapContainer} style={{ height: "100%" }}>
    <input className={styles.input} type="text" value= {search} onChange={(e) => setSearch(e.target.value)} placeholder='Поиск...'/>
      <Map
        defaultState={{ center: [59.95, 30.3], zoom: 9 }}
        width={"100%"}
        style={{ height: "calc(90vh - 100px)", marginTop: "100px" }}
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
              
            />
          ))}
        </Clusterer>
      </Map>
      <ModalWindow active={modalActive} onToggle={() => setModalActive(false)}>
      {modalActive && ( <form onSubmit={onSubmitHandler}>
      <input
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='Название места'
      />
       <textarea
       className={styles.textarea}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder='Описание места'
      />
      <button type='submit'>Создать место</button>
      </form>)}
     </ModalWindow>
    </div>
    <div className={styles.sidebar}>
      
      <Sidebar places={filteredPlaces} />
    </div>
    
    </>
  );
}

export default MapList;
