import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export default function Map({ info }) {
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);
  const [showMap, setMap] = useState(false);
  const fetchCoordinates = () => {
    setTimeout(() => {
      setLongitude(info.capitalInfo.latlng[0]);
      setLatitude(info.capitalInfo.latlng[1]);
      setMap(true);
    }, 1000);
  };
  L.Icon.Default.imagePath='img/';
  return (
    <>
        {" "}
        {fetchCoordinates()}
      {showMap && (
        <MapContainer
          center={[longitude, latitude]}
          zoom={4}
          scrollWheelZoom={false}
          style={{
            height: "400px",
            width: "35%",
            borderStyle: "solid",
            borderColor: "black",
            borderRadius: "20px",
          }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[longitude, latitude]}>
            <Popup>
              {info.capital}, {info.name.common}
            </Popup>
          </Marker>
        </MapContainer>
      )}
    </>
  );
}
