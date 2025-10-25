import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// ✅ Fix Leaflet default marker issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const MapComponent = () => {
  // 📍 Family Dental Clinic Location
  const position = [22.5406, 88.3795];

  // Google Maps URL
  const googleMapsUrl =
    "https://www.google.com/maps?q=11A/1D,+East+Topsia+Road,+Mirania+Gardens,+Kolkata+700046";

  return (
    <div
      className="
        w-full 
        max-w-[600px]
        h-[180px] 
        sm:h-[250px] 
        md:h-[300px] 
        lg:h-[250px] 
        rounded-xl 
        overflow-hidden 
        border-2 border-[#2874c7] 
        shadow-md 
        cursor-pointer 
        mx-auto
      "
      onClick={() => window.open(googleMapsUrl, "_blank")}
      title="Click to open in Google Maps"
    >
      <MapContainer
        center={position}
        zoom={16}
        scrollWheelZoom={false}
        className="h-full w-full pointer-events-none rounded-xl"
      >
        <TileLayer
          attribution='© <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            📍 <b>Family Dental Clinic</b>
            <br />
            11A/1D, East Topsia Road,
            <br />
            Mirania Gardens, Kolkata 700046
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
