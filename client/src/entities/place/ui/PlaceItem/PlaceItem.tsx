import { Placemark } from "@pbe/react-yandex-maps"
import { useNavigate } from "react-router-dom";
import pin from "@/assets/pin2.png"

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
        iconImageHref: `${pin}`,
        iconImageSize: [30, 30],
        iconImageOffset: [-15, -15],
    }}
  
    properties={{ hintContent: `${title}`
            }}
            onClick={handlePlacemarkClick}  
    />
  )
}

