import { PlaceItem } from "@/entities/place";
import { Clusterer, Map } from "@pbe/react-yandex-maps";
import { useRef, useState } from "react";
import styles from "./MapList.module.css";
import ModalWindow from "@/shared/ui/Modal/ModalWindow";

const places: { index: number; coordinates: [number, number] }[] = [
  {
    index: 1,
    coordinates: [59.95, 30.3],
  },
  {
    index: 2,
    coordinates: [60.95, 30.3],
  },
  {
    index: 3,
    coordinates: [61.95, 30.3],
  },
  {
    index: 4,
    coordinates: [62.95, 30.3],
  },
  {
    index: 5,
    coordinates: [63.95, 30.3],
  },
];
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
  const timerRef = useRef<NodeJS.Timeout | null>(null);


  const handleMouseDown = (e: YMapsMouseEvent) => {
    const originalEvent = e.get("domEvent").originalEvent;
    
    if (originalEvent.button === 2) {
      originalEvent.preventDefault();
      
      timerRef.current = setTimeout(() => {
        setIsLongTouch(true);
        const coords = e.get("coords");
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

  return (
    <div style={{ height: "100%" }}>
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
          {places.map((place) => (
            <PlaceItem
              key={place.index}
              index={place.index}
              coordinates={place.coordinates}
            />
          ))}
        </Clusterer>
      </Map>
      <ModalWindow active={modalActive} onToggle={() => setModalActive(false)}>
      {modalActive && ( <form >
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
  );
}

export default MapList;
