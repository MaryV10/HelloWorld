import { Map } from "@pbe/react-yandex-maps";

function MapList() {
  return (
    <div style={{ height: "100%" }}>
      <Map
        defaultState={{ center: [59.95, 30.3], zoom: 9 }}
        width={"100%"}
        style={{ height: "calc(90vh - 100px)", marginTop: "100px" }}
      />
    </div>
  );
}

export default MapList;
