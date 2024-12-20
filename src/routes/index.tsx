import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { TabRoutes } from './TabRoutes';

export function RootStack() {
  return (
    <NavigationContainer>
      <TabRoutes />
    </NavigationContainer>
  );
}

export default RootStack;
