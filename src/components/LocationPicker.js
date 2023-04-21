import { MapContainer, TileLayer } from "react-leaflet";
function LocationPicker() {
  return (
    <div>
      <p>لوکیشن خود را از روی نقشه انتخاب کنید</p>
      <MapContainer center={[35.6892, 51.389]} zoom={13}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapContainer>
    </div>
  );
}

export default LocationPicker;
