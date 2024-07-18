import React from 'react';
import { StoreProvider } from './store/StoreProvider';
import { RootStore } from './store/RootStore';
import MainComponent from './MainComponent';

const store = new RootStore({});

const App: React.FC = () => {
  return (
    <StoreProvider store={store}>
      <MainComponent />
    </StoreProvider>
  );
};

export default App;
