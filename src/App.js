import React from 'react'; // Don't forget to import React
import './App.css';
import WarehouseList from './components/WarehouseList';
// import WarehouseDetails from './components/WarehouseDetails';
import WarehouseItem from './components/WarehouseItem';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Add content to your header */}
        <h1>Welcome to My Warehouse App</h1>
      </header>

      {/* Include your WarehouseList and WarehouseDetails components */}
      <WarehouseList />
      {/* <WarehouseDetails /> */}
      <WarehouseItem/>
    </div>
  );
}

export default App;
