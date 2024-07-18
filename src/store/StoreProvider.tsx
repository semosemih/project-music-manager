import React, { createContext, useContext, ReactNode } from 'react';
import { RootStore } from './RootStore';

interface StoreProviderProps {
  store: RootStore;
  children: ReactNode;
}

const StoreContext = createContext<RootStore | undefined>(undefined);

export const StoreProvider: React.FC<StoreProviderProps> = ({ store, children }) => {
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};

export const useStore = (): RootStore => {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};
