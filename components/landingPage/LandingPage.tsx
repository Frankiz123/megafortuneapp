import React, {useState, useEffect} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import ProgressBar from '../progressBar/ProgressBar';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../types/types';

// Define a type for the navigation prop
type LandingPageNavigationProp = StackNavigationProp<
  RootStackParamList,
  'LandingScreen'
>;

interface Props {
  navigation: LandingPageNavigationProp;
}

const LandingPage: React.FC<Props> = ({navigation}) => {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    // Clear interval if it exists
    const interval = setInterval(() => {
      setIndex(prevIndex => {
        // When index reaches 10, navigate and clear the interval
        if (prevIndex === 10) {
          clearInterval(interval); // Stop the interval
          navigation.navigate('BottomTabStack'); // Navigate to the target screen
          return prevIndex; // Return the current index to avoid further updates
        }
        return (prevIndex + 1) % 11; // Update index in the interval
      });
    }, 400);

    return () => {
      clearInterval(interval); // Clean up the interval on component unmount
    };
  }, [navigation]); // Only re-run the effect if `navigation` changes

  return (
    <View style={styles.container}>
      <Image
        // eslint-disable-next-line react-native/no-inline-styles
        style={{alignSelf: 'center'}}
        source={require('../../assets/images/logo.png')}
      />
      <View style={styles.spacer} />
      <ProgressBar step={index} steps={10} height={20} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#902BB4',
    justifyContent: 'center',
    padding: 60,
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
  spacer: {
    height: 25,
  },
});

export default LandingPage;
