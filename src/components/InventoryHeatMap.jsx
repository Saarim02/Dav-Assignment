import React from 'react';


const InventoryHeatMap = ({ inventory }) => {
  // Get color based on inventory level
  const getLevelColor = (level) => {
    switch (level) {
      case 'high':
        return '#4CAF50'; 
      case 'medium':
        return '#FFC107'; 
      case 'low':
        return '#F44336'; 
      default:
        return '#9E9E9E'; 
    }
  };

  const getTextColor = (level) => {
    return level === 'medium' ? '#000' : '#FFF';
  };

  return (
    <div className="inventory-heatmap">
      <h2>Inventory Levels</h2>
      <div className="inventory-grid">
        {inventory.map((item, index) => (
          <div
            key={index}
            className="inventory-item"
            style={{
              backgroundColor: getLevelColor(item.level),
              color: getTextColor(item.level)
            }}
          >
            <div className="inventory-location">{item.location}</div>
            <div className="inventory-level">{item.level.toUpperCase()}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InventoryHeatMap;

