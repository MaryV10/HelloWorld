import { Placemark } from "@pbe/react-yandex-maps"
import { useNavigate } from "react-router-dom";

interface PlaceItemProps {
    index: number;             
    coordinates: [number, number];
    title: string;
  }
export const PlaceItem: React.FC<PlaceItemProps> = ({index, coordinates, title }) =>{
    const navigate = useNavigate(); 
    const handlePlacemarkClick = () => {  
        navigate(`/OnePlacePage/${index}`);  
      };  
  return (
    <Placemark key={index} geometry={coordinates} 
    modules={[ 'geoObject.addon.hint']}
    options={
      {
        iconLayout: "default#image",
        iconImageHref: "https://cdn-icons-png.flaticon.com/512/645/645777.png",
        iconImageSize: [30, 30],
        iconImageOffset: [-15, -15],
    }}
  
    properties={{ hintContent: `${title}`
            }}
            onClick={handlePlacemarkClick}  
    />
  )
}

