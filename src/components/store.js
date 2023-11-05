// store.js
import { createStore, combineReducers } from 'redux';
import warehouseReducer from './reducers/warehouseReducer';
import { Provider } from 'react-redux';

const rootReducer = combineReducers({
  warehouse: warehouseReducer,
  // Add more reducers here if needed
});

const store = createStore(rootReducer);

const App = () => (
  <Provider store={store}>
    {/* Your main component hierarchy */}
  </Provider>
);
