import { createTheme, useTheme as useRestyleTheme } from '@shopify/restyle';
import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import { borderRadius, colors, spacing } from './constants';

type NamedStyles<T> = {
  [P in keyof T]: ViewStyle | TextStyle | ImageStyle;
};

const theme = createTheme({
  colors: {
    ...colors,
  },
  spacing: {
    ...spacing,
  },
  borderRadii: {
    ...borderRadius,
  },
});

export const useTheme = () => {
  return useRestyleTheme<Theme>();
};

export const makeStyles = <T extends NamedStyles<T> | NamedStyles<unknown>>(
  styles: (theme: Theme) => T
) => {
  return () => {
    return styles(theme);
  };
};

export type Theme = typeof theme;
export default theme;
