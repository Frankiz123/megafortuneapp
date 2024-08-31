import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, StyleSheet} from 'react-native';

// Screens
import HomePage from '../components/homePage/HomePage';
import PlatformPage from '../components/platformPage/PlatformPage';
import PaymentPage from '../components/paymentPage/PaymentPage';
import ContactPage from '../components/contactUsPage/ContactPage';
import {BottomTabParamList} from '../types/types';

// Screen Names
const homeScreen = 'HomePage';
const platformPage = 'PlatformPage';
const paymentPage = 'PaymentPage';
const contactPage = 'ContactPage';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const ScreenStack: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName={homeScreen}
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          height: 54,
        },
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({}) => {
          const rn = route.name;
          let iconSource: any;
          let iconStyle;

          switch (rn) {
            case homeScreen:
              iconStyle = styles.home;
              iconSource = require('../assets/images/Home.png');
              break;
            case platformPage:
              iconStyle = styles.platform;
              iconSource = require('../assets/images/Platforms.png');
              break;
            case paymentPage:
              iconStyle = styles.buyCredit;
              iconSource = require('../assets/images/Buycredits.png');
              break;
            case contactPage:
              iconStyle = styles.contactUs;
              iconSource = require('../assets/images/ContactUs.png');
              break;
            default:
              iconSource = undefined;
              iconStyle = undefined;
          }

          return iconSource ? (
            <Image source={iconSource} style={iconStyle} />
          ) : null;
        },
      })}>
      <Tab.Screen name={homeScreen} component={HomePage} />
      <Tab.Screen name={platformPage} component={PlatformPage} />
      <Tab.Screen name={paymentPage} component={PaymentPage} />
      <Tab.Screen name={contactPage} component={ContactPage} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  home: {
    width: 31,
    height: 44,
  },
  platform: {
    width: 50,
    height: 45,
  },
  buyCredit: {
    width: 52,
    height: 46,
  },
  contactUs: {
    width: 57,
    height: 44,
  },
});

export default ScreenStack;