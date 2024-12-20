import * as Icon from 'phosphor-react-native';
import React from 'react';
import { useTheme } from 'styled-components/native';

export function getTabBarIcon({ name, isFocused }: { name: string; isFocused: boolean }) {
  const theme = useTheme();
  let iconComponent;

  switch (name) {
    case 'Home':
      iconComponent = (
        <Icon.HouseSimple size={24} color={isFocused ? theme.colors.bgColor : theme.colors.black} />
      );
      break;
    case 'Table':
      iconComponent = (
        <Icon.Table size={24} color={isFocused ? theme.colors.bgColor : theme.colors.black} />
      );
      break;
    default:
      iconComponent = (
        <Icon.SoccerBall size={24} color={isFocused ? theme.colors.bgColor : theme.colors.black} />
      );
      break;
  }

  return iconComponent;
}
