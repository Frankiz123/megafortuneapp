import React from 'react';
import {Text, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {BottomTabParamList} from '../../types/types';
// Define a type for the navigation prop
type ContactPageNavigationProp = StackNavigationProp<
  BottomTabParamList,
  'ContactPage'
>;

interface Props {
  navigation: ContactPageNavigationProp;
}

const ContactPage: React.FC<Props> = ({}) => {
  return (
    <View>
      <Text>ContactPage</Text>
    </View>
  );
};

export default ContactPage;
