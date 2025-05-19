import { LatLng } from "leaflet";
import { useState } from "react";
import { useMapEvents } from "react-leaflet";
import "./MapCoordinates.css";

function MapCoordinates() {
  const [position, setPosition] = useState<LatLng>(new LatLng(0, 0));

  useMapEvents({
    mousemove: (e) => {
      setPosition(e.latlng);
    },
  });

  return (
    <div className="leaflet-top leaflet-left">
      <div className="leaflet-control coordinates-display">
        <div className="coordinates-title">Карта</div>
        <div className="coordinates-value">
          {Math.trunc(position.lat)}, {Math.trunc(position.lng)}
        </div>
      </div>
    </div>
  );
}

export default MapCoordinates;
