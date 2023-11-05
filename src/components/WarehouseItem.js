import React, { useState, useEffect } from 'react';
import WarehouseList from './WarehouseList';
import WarehouseDetails from './WarehouseDetails';

function WarehouseItem() {
  const [warehouses, setWarehouses] = useState([]);

  useEffect(() => {
    // Fetch data from 'warehouse.json' in the same directory
    fetch('/warehouse.json')
    .then((response) => response.json())
    .then((data) => {
      console.log('Fetched data:', data);
      setWarehouses(data); // Set the data in the state
    })
    .catch((error) => console.error('Error fetching data:', error));
  }, []);

  

  console.log('WarehouseItem component is rendering with data:', warehouses);

  return (
    <div>
     
      <WarehouseDetails warehouses={warehouses} />
    </div>
  );
}

export default WarehouseItem;
