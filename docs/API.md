# 📡 API Reference

## Components

### MapView
**Props**: `{ shipments: Array<Shipment> }`

**Shipment**:
```javascript
{
  id: string,        // 'SH001'
  lat: number,       // -90 to 90
  lng: number,       // -180 to 180
  status: string,    // 'On Time' | 'In Transit' | 'Delayed'
  etaDelay: number,  // Days of delay
  location: string   // 'New York, USA'
}
```

**Marker Colors**: Green (On Time), Blue (In Transit), Red (Delayed)

---

### InventoryHeatMap
**Props**: `{ inventory: Array<InventoryItem> }`

**InventoryItem**:
```javascript
{
  location: string,  // 'Warehouse A'
  level: string      // 'low' | 'medium' | 'high'
}
```

**Colors**: Green (high), Yellow (medium), Red (low)

---

### DelayChart
**Props**: `{ timeSeriesData: { labels: string[], delays: number[] } }`

**Example**:
```javascript
{
  labels: ['10:00', '10:05', '10:10'],
  delays: [2, 3, 1]
}
```

---

## Data Functions

### `generateTimeSeriesData(length)`
Generates mock time-series data. Default: 20 points.

### `updateShipments(shipments)`
Updates shipments with random variations (delay ±1, position ±0.05°).

### `updateInventory(inventory)`
Updates inventory levels (20% chance to change per item).

---

## Initial Data

**Shipments**: 7 global shipments in `initialShipments`
**Inventory**: 5 warehouses in `initialInventory`

---

For customization examples, see [Development Guide](./DEVELOPMENT.md).
