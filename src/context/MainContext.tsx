// MainContext.tsx
import React, { createContext, useContext, ReactNode } from 'react';
import { useCheckView } from '../hooks/useCheckView';
import { MainContextType } from '../types/MainContextType';

// Creating a context with a more comprehensive default value
const defaultContextValue: MainContextType = {
  viewSize: undefined, // Default to undefined, will be set dynamically
  theme: 'light' // Just an example, adjust as needed
};

const MainContext = createContext<MainContextType>(defaultContextValue);

interface MainProviderProps {
  children: ReactNode;
}

export const MainProvider: React.FC<MainProviderProps> = ({ children }) => {
  const { view } = useCheckView();

  // Here you could dynamically change other parts of the context, like theme
  const contextValue = {
    ...defaultContextValue, // Spread the default values
    viewSize: view // Override with dynamic value
  };

  return (
    <MainContext.Provider value={contextValue}>
      {children}
    </MainContext.Provider>
  );
};

// Custom hook to use the context
export const useMainContext = () => {
  const context = useContext(MainContext);
  if (context === undefined) {
    throw new Error('useMainContext must be used within a MainProvider');
  }
  return context;
};
