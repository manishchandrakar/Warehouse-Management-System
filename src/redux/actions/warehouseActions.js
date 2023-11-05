// warehouseActions.js
export const FILTER_WAREHOUSES = 'FILTER_WAREHOUSES';
export const SEARCH_WAREHOUSES = 'SEARCH_WAREHOUSES';
export const SELECT_WAREHOUSE = 'SELECT_WAREHOUSE';

export const filterWarehouses = (filterName, filterValue) => ({
  type: FILTER_WAREHOUSES,
  payload: { filterName, filterValue },
});

export const searchWarehouses = (searchQuery) => ({
  type: SEARCH_WAREHOUSES,
  payload: searchQuery,
});

export const selectWarehouse = (warehouseId) => ({
  type: SELECT_WAREHOUSE,
  payload: warehouseId,
});
