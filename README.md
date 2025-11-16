# 🌍 Global Supply Chain Dashboard

A simple, clean, beginner-friendly React-based dashboard for monitoring global supply chain logistics in real-time.

## ✨ Features

- **World Map (Leaflet)**: Interactive map showing shipment markers with status, location, and delay information
- **Inventory Heat Map**: Visual grid representation of inventory levels (low/medium/high) across multiple warehouses
- **Time-Series Chart**: Line chart displaying shipment delays over time using Chart.js
- **Real-time Simulation**: Automatic data updates every 5 seconds to simulate real-time monitoring

## 🚀 Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```

3. **Open your browser:**
   The app will automatically open at `http://localhost:3000`

## 📦 Dependencies

- **React** (^18.2.0) - UI library
- **react-dom** (^18.2.0) - React DOM renderer
- **react-scripts** (^5.0.1) - Create React App scripts
- **leaflet** (^1.9.4) - Interactive maps
- **react-leaflet** (^4.2.1) - React bindings for Leaflet
- **chart.js** (^4.4.0) - Charting library
- **react-chartjs-2** (^5.2.0) - React wrapper for Chart.js

## 📁 Project Structure

```
DAV/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── MapView.jsx          # World map with shipment markers
│   │   ├── InventoryHeatMap.jsx # Inventory level grid
│   │   └── DelayChart.jsx       # Time-series delay chart
│   ├── data/
│   │   └── mockData.js          # Mock data and update functions
│   ├── App.jsx                  # Main app component
│   ├── App.css                  # Styles
│   └── index.js                 # Entry point
├── package.json
└── README.md
```

## 🎯 How It Works

1. **Mock Data**: All data is generated and updated within the app (no backend required)
2. **Real-time Updates**: `setInterval` updates shipments, inventory, and chart data every 5 seconds
3. **Shipment Tracking**: 7 shipments are displayed on the map with color-coded markers:
   - 🟢 Green: On Time
   - 🔵 Blue: In Transit
   - 🔴 Red: Delayed
4. **Inventory Levels**: 5 warehouses show inventory status with color coding:
   - 🟢 Green: High
   - 🟡 Yellow: Medium
   - 🔴 Red: Low
5. **Delay Chart**: Shows the last 20 data points of average shipment delays

## 🎨 UI Layout

- **Left (60%)**: Interactive world map
- **Right Top**: Inventory heat map grid
- **Right Bottom**: Time-series delay chart

## 🔧 Customization

You can modify the mock data in `src/data/mockData.js`:
- Add/remove shipments
- Change inventory locations
- Adjust update frequency (currently 5 seconds)
- Modify delay ranges and status logic

## 📝 Notes

- All data is mocked and updates automatically
- No backend or API calls required
- Fully responsive design
- Simple, readable code with comments

## 🛠️ Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 📚 Documentation

Documentation is available in the [`docs/`](./docs/) folder:

- **[Project Summary](./docs/PROJECT_SUMMARY.md)** - Complete project overview
- **[API Reference](./docs/API.md)** - Components, props, and data structures
- **[Development Guide](./docs/DEVELOPMENT.md)** - Customization and extension guide

---

Built with ❤️ using React, Leaflet, and Chart.js

