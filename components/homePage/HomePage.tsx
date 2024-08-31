import React from 'react';
import {View, Text} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {BottomTabParamList} from '../../types/types';
// Define a type for the navigation prop
type HomePageNavigationProp = StackNavigationProp<
  BottomTabParamList,
  'HomePage'
>;

interface Props {
  navigation: HomePageNavigationProp;
}

const HomePage: React.FC<Props> = ({}) => {
  return (
    <View>
      <Text>HomePage</Text>
    </View>
  );
};

export default HomePage;
