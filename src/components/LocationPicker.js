import { MapContainer, TileLayer } from "react-leaflet";
import LocationMarker from "./LocationMarker";
import styles from "./locationPicker.module.css";
function LocationPicker() {
  return (
    <div className={styles.container}>
      <p className={styles.guide}>لوکیشن خود را از روی نقشه انتخاب کنید</p>
      <MapContainer center={[35.6892, 51.389]} zoom={13}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <LocationMarker />
      </MapContainer>
    </div>
  );
}

export default LocationPicker;
