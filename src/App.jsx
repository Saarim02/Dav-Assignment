import React, { useState, useEffect } from 'react';
import MapView from './components/MapView';
import InventoryHeatMap from './components/InventoryHeatMap';
import DelayChart from './components/DelayChart';
import {
  initialShipments,
  initialInventory,
  generateTimeSeriesData,
  updateShipments,
  updateInventory
} from './data/mockData';
import './App.css';

/**
 * Main App Component
 * Manages state and real-time updates for the supply chain dashboard
 */
function App() {
  // State for shipments, inventory, and time-series data
  const [shipments, setShipments] = useState(initialShipments);
  const [inventory, setInventory] = useState(initialInventory);
  const [timeSeriesData, setTimeSeriesData] = useState(generateTimeSeriesData(20));

  // Real-time simulation: update data every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      // Update shipments
      setShipments(prevShipments => updateShipments(prevShipments));
      
      // Update inventory
      setInventory(prevInventory => updateInventory(prevInventory));
      
      // Update time-series data (add new point, remove oldest)
      setTimeSeriesData(prevData => {
        const newLabels = [...prevData.labels];
        const newDelays = [...prevData.delays];
        
        // Remove first element
        newLabels.shift();
        newDelays.shift();
        
        // Add new data point
        const now = new Date();
        newLabels.push(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }));
        newDelays.push(Math.floor(Math.random() * 10));
        
        return { labels: newLabels, delays: newDelays };
      });
    }, 5000); // Update every 5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <header className="app-header">
        <h1>🌍 Global Supply Chain Dashboard</h1>
        <p className="subtitle">Real-time Logistics Monitoring</p>
      </header>
      
      <div className="dashboard-grid">
        {/* Left side: Map (60% width) */}
        <div className="map-section">
          <MapView shipments={shipments} />
        </div>
        
        {/* Right side: Inventory and Chart (40% width) */}
        <div className="right-section">
          {/* Top: Inventory Heat Map */}
          <div className="inventory-section">
            <InventoryHeatMap inventory={inventory} />
          </div>
          
          {/* Bottom: Time-Series Chart */}
          <div className="chart-section">
            <DelayChart timeSeriesData={timeSeriesData} />
          </div>
        </div>
      </div>
      
      <footer className="app-footer">
        <p>Data updates every 5 seconds • Last updated: {new Date().toLocaleTimeString()}</p>
      </footer>
    </div>
  );
}

export default App;

