// warehouseReducer.js
import {
  FILTER_WAREHOUSES,
  SEARCH_WAREHOUSES,
  SELECT_WAREHOUSE,
} from '../actions/warehouseActions';

const initialState = {
  warehouses: [], // Your warehouse data
  filters: {
    city: '',
    cluster: '',
    spaceAvailable: '',
  },
  searchQuery: '',
  selectedWarehouseId: null, // Initialize selectedWarehouseId
};

const warehouseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_WAREHOUSES:
      const { filterName, filterValue } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [filterName]: filterValue,
        },
      };
    case SEARCH_WAREHOUSES:
      return {
        ...state,
        searchQuery: action.payload,
      };
    case SELECT_WAREHOUSE:
      return {
        ...state,
        selectedWarehouseId: action.payload,
      };
    default:
      return state;
  }
};

export default warehouseReducer;
