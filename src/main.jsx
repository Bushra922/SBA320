import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

const root = document.getElementById('root');

// Function to render the app
const renderApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

// Check if createRoot is available
if (root.createRoot) {
  // If createRoot is available, use it
  const rootInstance = createRoot(root);
  rootInstance.render(renderApp());
} else {
  // If createRoot is not available, fall back to ReactDOM.render
  ReactDOM.render(renderApp(), root);
}