import React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from './App';
import { StoreProvider } from './store/StoreProvider';
import { RootStore } from './store/RootStore';

const store = new RootStore({});

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement); 
  root.render(
    <React.StrictMode>
      <StoreProvider store={store}>
        <App />
      </StoreProvider>
    </React.StrictMode>
  );
} else {
  console.error('Root element with id "root" not found in the document.');
}
