import { Placemark } from "@pbe/react-yandex-maps"
import { useNavigate } from "react-router-dom";

interface PlaceItemProps {
    index: number;             // Явное указание, что index — это число
    coordinates: [number, number];  // Явное указание типа для координат (массив из двух чисел)
  }
export const PlaceItem: React.FC<PlaceItemProps> = ({index, coordinates }) =>{
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
  
    properties={{ hintContent: `Hello World ${index}`
            }}
            onClick={handlePlacemarkClick}  
    />
  )
}

