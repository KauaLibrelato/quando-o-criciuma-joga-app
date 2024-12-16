import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StackRoutes } from './StackRoutes';

export function RootStack() {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
}

export default RootStack;
