import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});
function ShowLocation({ location }) {
  return (
    <MapContainer center={[location.lat, location.lng]} zoom={16}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker
        position={[location.lat, location.lng]}
        icon={DefaultIcon}
      ></Marker>
    </MapContainer>
  );
}

export default ShowLocation;
