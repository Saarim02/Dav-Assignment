# 📚 Documentation

Quick reference for the Supply Chain Dashboard.

## 📖 Quick Links

- **[Project Summary](./PROJECT_SUMMARY.md)** - Complete project overview
- [API Reference](./API.md) - Components, props, and data structures
- [Development Guide](./DEVELOPMENT.md) - Customization and extension

## 🎯 Key Concepts

- **Real-time Updates**: `setInterval` updates data every 5 seconds
- **Components**: App → MapView, InventoryHeatMap, DelayChart
- **Data Flow**: `mockData.js` → `App.jsx` (state) → Components (props)

## 📁 Project Structure

```
src/
├── components/     # UI components
├── data/          # Mock data & update functions
├── App.jsx        # Main container
└── index.js       # Entry point
```

---

For installation and setup, see the main [README](../README.md).
