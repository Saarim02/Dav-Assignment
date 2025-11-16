// Mock data for supply chain dashboard

// Initial shipments data
export const initialShipments = [
  { id: 'SH001', lat: 40.7128, lng: -74.0060, status: 'In Transit', etaDelay: 2, location: 'New York, USA' },
  { id: 'SH002', lat: 51.5074, lng: -0.1278, status: 'Delayed', etaDelay: 5, location: 'London, UK' },
  { id: 'SH003', lat: 35.6762, lng: 139.6503, status: 'On Time', etaDelay: 0, location: 'Tokyo, Japan' },
  { id: 'SH004', lat: 52.5200, lng: 13.4050, status: 'In Transit', etaDelay: 1, location: 'Berlin, Germany' },
  { id: 'SH005', lat: -33.8688, lng: 151.2093, status: 'On Time', etaDelay: 0, location: 'Sydney, Australia' },
  { id: 'SH006', lat: 22.3193, lng: 114.1694, status: 'Delayed', etaDelay: 8, location: 'Hong Kong' },
  { id: 'SH007', lat: -23.5505, lng: -46.6333, status: 'In Transit', etaDelay: 3, location: 'São Paulo, Brazil' }
];

// Initial inventory locations
export const initialInventory = [
  { location: 'Warehouse A', level: 'high' },
  { location: 'Warehouse B', level: 'medium' },
  { location: 'Warehouse C', level: 'low' },
  { location: 'Warehouse D', level: 'high' },
  { location: 'Warehouse E', level: 'medium' }
];

// Generate random time-series data for delays
export const generateTimeSeriesData = (length = 20) => {
  const labels = [];
  const delays = [];
  const now = new Date();
  
  for (let i = length - 1; i >= 0; i--) {
    const date = new Date(now);
    date.setMinutes(date.getMinutes() - i * 5);
    labels.push(date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }));
    delays.push(Math.floor(Math.random() * 10));
  }
  
  return { labels, delays };
};

// Function to update shipments with slight random changes
export const updateShipments = (currentShipments) => {
  return currentShipments.map(shipment => {
    // Randomly update delay by ±1
    const delayChange = Math.floor(Math.random() * 3) - 1; // -1, 0, or 1
    const newDelay = Math.max(0, shipment.etaDelay + delayChange);
    
    // Update status based on delay
    let newStatus = shipment.status;
    if (newDelay === 0) {
      newStatus = 'On Time';
    } else if (newDelay > 5) {
      newStatus = 'Delayed';
    } else {
      newStatus = 'In Transit';
    }
    
    // Slight position variation (simulate movement)
    const latVariation = (Math.random() - 0.5) * 0.1;
    const lngVariation = (Math.random() - 0.5) * 0.1;
    
    return {
      ...shipment,
      etaDelay: newDelay,
      status: newStatus,
      lat: shipment.lat + latVariation,
      lng: shipment.lng + lngVariation
    };
  });
};

// Function to update inventory levels
export const updateInventory = (currentInventory) => {
  return currentInventory.map(location => {
    const levels = ['low', 'medium', 'high'];
    const currentIndex = levels.indexOf(location.level);
    
    // 20% chance to change level
    if (Math.random() < 0.2) {
      const change = Math.random() < 0.5 ? -1 : 1;
      const newIndex = Math.max(0, Math.min(2, currentIndex + change));
      return { ...location, level: levels[newIndex] };
    }
    
    return location;
  });
};

