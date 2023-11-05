import React from 'react';
import { useSelector } from 'react-redux';
import WarehouseItem from './WarehouseItem';

const WarehouseList = () => {
  // Use useSelector to retrieve the 'warehouses' from the Redux store
  const warehouses = useSelector((state) => state.warehouse.warehouses);

  return (
    <div>
      {/* <h1>Warehouse List</h1> */}
      {warehouses.map((warehouse) => (
        <WarehouseItem key={warehouse.id} warehouse={warehouse} />
      ))}
    </div>
  );
};

export default WarehouseList;
