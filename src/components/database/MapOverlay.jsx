import React, { useState, useEffect } from "react";
import {
  MapContainer,
  ScaleControl,
  TileLayer,
  ZoomControl,
  Marker,
  Popup,
} from "react-leaflet";
import { LatLng } from "leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./map.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { IoCloseSharp } from "react-icons/io5";
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;

function MapOverlay({ closeModal }) {
  const position = new LatLng(28.6139, 77.209);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const modalContent = document.querySelector(".modal-content");

      if (modalContent && !event.target.closest(".modal-content")) {
        // Close the modal if the click is outside the modal content and not on the excluded class
        closeModal();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeModal]);

  return (
    <div className="modal-overlay">
      <div className="modal-content relative">
        <div className="w-[70vw] items-center bg-white h-[30px]">
          <button onClick={closeModal}>
            <IoCloseSharp
              size={24}
              className="absolute  top-1 right-2"
              color="black"
            />
          </button>
        </div>
        <MapContainer
          className="mapcontainer"
          attributionControl={false}
          center={position}
          zoom={15}
          style={{ height: "500px", width: "70vw" }}
        >
          <ZoomControl position="topright" />
          <ScaleControl position="bottomright" />

          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={position} icon={DefaultIcon}></Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default MapOverlay;
