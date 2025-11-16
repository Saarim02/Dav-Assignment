import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});


const MapView = ({ shipments }) => {
  // Get status color for marker
  const getStatusColor = (status) => {
    switch (status) {
      case 'On Time':
        return 'green';
      case 'Delayed':
        return 'red';
      case 'In Transit':
        return 'blue';
      default:
        return 'gray';
    }
  };

  const createCustomIcon = (status) => {
    const color = getStatusColor(status);
    return L.divIcon({
      className: 'custom-marker',
      html: `<div style="
        background-color: ${color};
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 2px solid white;
        box-shadow: 0 2px 4px rgba(0,0,0,0.3);
      "></div>`,
      iconSize: [20, 20],
      iconAnchor: [10, 10]
    });
  };

  return (
    <div className="map-container">
      <h2>Global Shipment Tracking</h2>
      <MapContainer
        center={[20, 0]}
        zoom={2}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {shipments.map((shipment) => (
          <Marker
            key={shipment.id}
            position={[shipment.lat, shipment.lng]}
            icon={createCustomIcon(shipment.status)}
          >
            <Popup>
              <div className="popup-content">
                <strong>Shipment ID:</strong> {shipment.id}<br />
                <strong>Status:</strong> {shipment.status}<br />
                <strong>Location:</strong> {shipment.location}<br />
                <strong>ETA Delay:</strong> {shipment.etaDelay} days
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapView;

