import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import LandingPage from '../components/landingPage/LandingPage';
import ScreenStack from './ScreenStack';
import {RootStackParamList} from '../types/types';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="LandingScreen" component={LandingPage} />
      <Stack.Screen name="BottomTabStack" component={ScreenStack} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
