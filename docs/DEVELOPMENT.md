# 🛠️ Development Guide

## Customization

### Change Update Frequency
```javascript
// src/App.jsx - Change 5000 to desired milliseconds
setInterval(() => { ... }, 3000); // 3 seconds
```

### Add Shipments
```javascript
// src/data/mockData.js
export const initialShipments = [
  // ... existing
  { id: 'SH008', lat: 55.7558, lng: 37.6173, status: 'In Transit', etaDelay: 1, location: 'Moscow, Russia' }
];
```

### Change Colors
```javascript
// MapView.jsx - Marker colors
const getStatusColor = (status) => {
  case 'On Time': return '#00FF00'; // Custom color
};

// InventoryHeatMap.jsx - Inventory colors
const getLevelColor = (level) => {
  case 'high': return '#00AA00'; // Custom color
};
```

### Change Map Center
```javascript
// MapView.jsx
<MapContainer center={[40.7128, -74.0060]} zoom={4} />
```

---

## Adding Features

### New Component
1. Create `src/components/NewComponent.jsx`
2. Import in `App.jsx`: `import NewComponent from './components/NewComponent'`
3. Add to render: `<NewComponent data={data} />`

### API Integration
```javascript
// Replace mock data with API calls
useEffect(() => {
  fetch('/api/shipments')
    .then(res => res.json())
    .then(data => setShipments(data));
}, []);
```

---

## Troubleshooting

**Map not showing**: Check Leaflet CSS import and container height
**Markers missing**: Verify shipments array has valid lat/lng
**Chart blank**: Ensure Chart.js components are registered
**Updates not working**: Check `setInterval` in `useEffect` cleanup

---

For API details, see [API Reference](./API.md).
