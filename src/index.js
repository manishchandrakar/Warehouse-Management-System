import React from 'react';
// import { createRoot } from 'react-dom';
import { createRoot } from 'react-dom/client';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'; // Import configureStore
import App from './App';

import warehouseReducer from './redux/reducers/warehouseReducer';

const store = configureStore({
  reducer: {
    // Add your reducers here
    warehouse: warehouseReducer,
  },
});

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
