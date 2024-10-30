import { Photo } from "@/entities/photo";
import { Placemark } from "@pbe/react-yandex-maps";
import { useNavigate } from "react-router-dom";
import pin from "@/assets/pin2.png";

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
        iconImageHref: `${pin}`,
        iconImageSize: [30, 30],
        iconImageOffset: [-15, -15],
      }}
      properties={{
        hintContent: `<div style="background: transparent; width: 100%; height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; ">
        <img src="${Photos[0]?.imageUrl}" alt="фото" style="border-radius: 10px 10px 0 0; width: 100%; height: auto;"> 
        <br><div style= "font-size: 15px;  fontWeight: normal; margin: 10px; width: 200px; text-align: center; word-wrap: break-word; overflow: hidden; background: transparent; text-overflow: ellipsis;">${title}</div>
        <button style= "color: white; font-size: 15px" onClick="window.location.href='/OnePlacePage/${index}'">Перейти к месту</button></div>`,
      }}
      onClick={handlePlacemarkClick}
    />
  );
};
