import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState } from "react";
import "leaflet/dist/leaflet.css";

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

  console.log(info);
  console.log(longitude, latitude);
  return (
    <>
      <div
        className="mapButton"
        style={{
          padding: "10px",
          borderRadius: "20px",
          fontSize: "1rem",
          width: "15%",
        }}
      >
        {" "}
        {fetchCoordinates()}
      </div>
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
