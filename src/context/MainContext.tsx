// MainContext.tsx
import React, { createContext, useContext, ReactNode } from 'react';
import { useCheckView } from '../hooks/useCheckView';
import { MainContextType } from '../types/MainContextType';
import { ThemeEnum } from '../enums/ThemeEnum';
import { ColorEnum } from '../enums/ColorEnum';
import { useThemeChange } from '../hooks/useThemeChange';
import { useColorChange } from '../hooks/useColorChange';

// Creating a context with a more comprehensive default value
const defaultContextValue: MainContextType = {
  viewSize: undefined, // Default to undefined, will be set dynamically
  theme: ThemeEnum.DARK,
  color: ColorEnum.ORANGE
};

const MainContext = createContext<MainContextType>(defaultContextValue);

interface MainProviderProps {
  children: ReactNode;
}

export const MainProvider: React.FC<MainProviderProps> = ({ children }) => {
  const { view } = useCheckView();
  const { theme, setTheme } = useThemeChange();
  const { color, setColor } = useColorChange();

  // Here you could dynamically change other parts of the context, like theme
  const contextValue = {
    ...defaultContextValue, // Spread the default values
    viewSize: view, // Override with dynamic value
    theme,
    setTheme,
    color,
    setColor
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
