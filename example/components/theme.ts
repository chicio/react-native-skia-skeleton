import { MD3LightTheme as DefaultTheme } from 'react-native-paper';

export const spacing = {
  base: 8,
  spacing2x: 16,
  spacing3x: 24,
  spacing4x: 32,
  spacing5x: 40,
  spacing6x: 48,
};

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#6C63FF',
    secondary: '#C8B6FF',
    background: '#FFFFFF',
    surface: '#F5F5F5',
    text: '#1C1C1E',
    onPrimary: '#FFFFFF',
  },
  roundness: 8,
};
