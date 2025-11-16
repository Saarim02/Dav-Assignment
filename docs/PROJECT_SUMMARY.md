# 📋 Project Summary

## What It Is
A React-based real-time supply chain logistics monitoring dashboard that visualizes global shipments, warehouse inventory levels, and delivery delays. Built as a beginner-friendly, self-contained application with no backend requirements.

## What It Does
The dashboard provides three main visualizations:
1. World Map - Interactive map showing shipment locations with color-coded status markers
2. Inventory Heat Map - Grid display of warehouse inventory levels (high/medium/low)
3. Delay Chart - Time-series line chart tracking shipment delays over time

All data updates automatically every 5 seconds to simulate real-time monitoring.

## Architecture
```
App.jsx
├── Manages state (shipments, inventory, time-series data)
├── Sets up update interval (every 5 seconds)
└── Renders three child components:
    ├── MapView → Leaflet map with markers
    ├── InventoryHeatMap → Colored grid
    └── DelayChart → Chart.js line chart
```

## Data Flow

### 1. Initialization
- App loads initial data from `mockData.js` (7 shipments, 5 warehouses)
- Components receive data as props and render

### 2. Real-time Updates
- `setInterval` triggers every 5 seconds
- Update functions modify data:
  - Shipments: delay changes ±1, status updates, position varies slightly
  - Inventory: 20% chance per warehouse to change level
  - Chart: removes oldest point, adds newest point
- React re-renders components with new data

### 3. Visualization
- Map markers update position and color based on status
- Inventory grid colors change based on levels
- Chart animates to show new data points

## Key Features
- No Backend Required: All data is mocked and generated client-side
- Real-time Simulation: Automatic updates every 5 seconds
- Interactive Map: Click markers to see shipment details
- Color Coding: Visual status indicators (green/yellow/red)
- Responsive Design: Works on different screen sizes

## Project Structure
```
DAV/
├── public/
│   └── index.html              # HTML template
├── src/
│   ├── components/
│   │   ├── MapView.jsx        # World map with shipment markers
│   │   ├── InventoryHeatMap.jsx  # Inventory level grid
│   │   └── DelayChart.jsx     # Time-series delay chart
│   ├── data/
│   │   └── mockData.js        # Mock data & update functions
│   ├── App.jsx                # Main app (state management)
│   ├── App.css                # Styles
│   └── index.js               # Entry point
├── docs/                      # Documentation
├── package.json               # Dependencies
```

## Components Overview

### App.jsx
- Role: Main container component
- Responsibilities:
  - Manages all state (shipments, inventory, chart data)
  - Sets up update interval
  - Coordinates data flow to child components

### MapView.jsx
- Role: Displays interactive world map
- Features:
  - Color-coded markers (green=on time, blue=in transit, red=delayed)
  - Clickable popups with shipment details
  - Uses OpenStreetMap tiles

### InventoryHeatMap.jsx
- Role: Shows warehouse inventory levels
- Features:
  - Grid of colored cards (green=high, yellow=medium, red=low)
  - Hover effects
  - Responsive layout

### DelayChart.jsx
- Role: Displays time-series chart
- Features:
  - Line chart with smooth curves
  - Shows last 20 data points
  - Auto-updates with new delay values

## Data Model

### Shipment
```javascript
{
  id: 'SH001',
  lat: 40.7128,
  lng: -74.0060,
  status: 'In Transit',
  etaDelay: 2,
  location: 'New York, USA'
}
```

### Inventory Item
```javascript
{
  location: 'Warehouse A',
  level: 'high'
}
```

### Time-Series Data
```javascript
{
  labels: ['10:00', '10:05', '10:10'],
  delays: [2, 3, 1]
}
```
