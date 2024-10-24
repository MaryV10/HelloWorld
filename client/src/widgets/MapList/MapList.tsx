import { PlaceItem } from "@/entities/place";
import { Clusterer, Map} from "@pbe/react-yandex-maps";
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
}
]
function MapList() {




  return (
    <div style={{ height: "100%" }}>
      <Map
        defaultState={{ center: [59.95, 30.3], zoom: 9 }}
        width={"100%"}
        style={{ height: "calc(90vh - 100px)", marginTop: "100px" }}
      >
      <Clusterer options={{
        preset: "islands#blueRunCircleIcon",
        groupByCoordinates: false,
      }}
    >
      {places.map((place) =>  (
        <PlaceItem key={place.index} index={place.index} coordinates={place.coordinates} />
        
      ))}
    </Clusterer>
    </Map>
    </div>
  );
}

export default MapList;
