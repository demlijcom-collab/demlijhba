# Inventory Management Mobile App

A beautiful, user-friendly mobile application for managing ready-to-sell inventory with bilingual support (Arabic/French).

## Features

### 🌟 Core Features
- **Bilingual Support**: Full Arabic and French language support with RTL layout
- **Mobile-First Design**: Optimized for mobile devices with responsive design
- **Inventory Management**: Add, edit, delete, and search inventory items
- **Data Persistence**: All data saved locally using browser storage
- **Real-time Statistics**: Live inventory stats and total value calculations

### 📊 Reporting & Analytics
- **Category Distribution**: Visual breakdown of products by category
- **Low Stock Alerts**: Automatic alerts for items with low inventory (≤5 items)
- **Export Functionality**: Export inventory data as JSON file
- **Total Value Tracking**: Real-time calculation of total inventory value

### 🎨 User Interface
- **Modern Design**: Clean, elegant interface with smooth animations
- **Dark/Light Themes**: Beautiful gradient backgrounds and card-based layout
- **Intuitive Navigation**: Tab-based navigation with clear icons
- **Modal Dialogs**: Smooth modal interactions for editing items

### 🔧 Technical Features
- **Local Storage**: Persistent data storage without server requirements
- **Search & Filter**: Real-time search across product names, categories, and descriptions
- **Form Validation**: Client-side validation for all input fields
- **Responsive Design**: Works perfectly on all screen sizes

## Usage

### Getting Started
1. Open `index.html` in any modern web browser
2. The app starts in Arabic by default
3. Use the language toggle (FR/AR) to switch languages
4. Sample data is automatically loaded on first use

### Managing Inventory
1. **Add Items**: Use the "إضافة منتج" (Add Product) tab
2. **View Inventory**: Browse all items in the "المخزون" (Inventory) tab
3. **Edit Items**: Click the edit icon on any item
4. **Delete Items**: Click the trash icon (with confirmation)
5. **Search**: Use the search bar to find specific items

### Categories
- Electronics (إلكترونيات / Électronique)
- Clothing (ملابس / Vêtements)
- Food (طعام / Nourriture)
- Books (كتب / Livres)
- Other (أخرى / Autre)

### Reports
- View product distribution by category
- Monitor low-stock items (≤5 units)
- Export data for backup or analysis

## Technical Stack

- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern styling with Flexbox/Grid, animations, and RTL support
- **Vanilla JavaScript**: No external dependencies, pure ES6+
- **Font Awesome**: Icons for better user experience
- **Local Storage API**: Client-side data persistence

## Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## File Structure

```
├── index.html          # Main HTML file
├── style.css           # Stylesheet with RTL support
├── app.js             # JavaScript application logic
└── README.md          # Documentation
```

## Features in Detail

### Language Support
- Complete Arabic and French translations
- RTL (Right-to-Left) layout for Arabic
- Dynamic language switching without page reload
- Persistent language preference

### Data Management
- JSON-based local storage
- Automatic data validation
- Export/import capabilities
- Sample data for demonstration

### Mobile Optimization
- Touch-friendly interface
- Responsive breakpoints
- Optimized for small screens
- Fast loading and smooth animations

## Future Enhancements

- Barcode scanning integration
- Cloud synchronization
- Advanced reporting charts
- Multi-currency support
- Bulk import/export
- User authentication
- Inventory alerts and notifications

## License

This project is open source and available under the MIT License.
