import { Photo } from "@/entities/photo";
import { Placemark } from "@pbe/react-yandex-maps";
import { useNavigate } from "react-router-dom";


interface PlaceItemProps {
  index: number;
  coordinates: [number, number];
  title: string;
  Photos: Photo[];
}
export const PlaceItem: React.FC<PlaceItemProps> = ({
  index,
  coordinates,
  title,
  Photos,
}) => {
  const navigate = useNavigate();
  const handlePlacemarkClick = () => {
    navigate(`/OnePlacePage/${index}`);
  };
  return (
    <Placemark
      key={index}
      geometry={coordinates}
      modules={["geoObject.addon.hint"]}
      options={{
        iconLayout: "default#image",
        iconImageHref: "https://cdn-icons-png.flaticon.com/512/645/645777.png",
        iconImageSize: [30, 30],
        iconImageOffset: [-15, -15],
      }}
      properties={{
        hintContent: `<div style="width: 75%; height: 75%">
        <img src=${Photos[0]?.imageUrl} alt="фото">
        <br><div style= "font-size: 15px; fontFamily: Unbounded; fontWeight: normal; margin: 10px">${title}</div>
        <button Onclick="window.location.href='/OnePlacePage/${index}'">Перейти к месту</button></div>`,
      }}
      onClick={handlePlacemarkClick}
    />
  );
};
