import React, {useEffect, useState} from 'react';
import {View, Image, Dimensions, FlatList} from 'react-native';
import styles from './platformStyle';
import Rectangle from '../rectangle/rectangle';
import {SafeAreaView} from 'react-native-safe-area-context';

const PlatformPage = () => {
  const imageData = [
    {id: '1', uri: require('../../assets/images/orionStars.png')},
    {id: '2', uri: require('../../assets/images/fireKirin.png')},
    {id: '3', uri: require('../../assets/images/blueDragon.png')},
    {id: '4', uri: require('../../assets/images/jackyStars.png')},
    {id: '5', uri: require('../../assets/images/GameVault.png')},
    {id: '6', uri: require('../../assets/images/Juwa.png')},
    {id: '7', uri: require('../../assets/images/ultraPanda.png')},
    {id: '8', uri: require('../../assets/images/lasVegas.png')},
    {id: '9', uri: require('../../assets/images/pandaMaster.png')},
    {id: '10', uri: require('../../assets/images/R.png')},
    {id: '11', uri: require('../../assets/images/vBlinck.png')},
    {id: '12', uri: require('../../assets/images/egame.png')},
    {id: '13', uri: require('../../assets/images/dragonCrown.png')},
  ];

  const [isLandscape, setIsLandscape] = useState(false);

  useEffect(() => {
    const updateOrientation = () => {
      const {width, height} = Dimensions.get('window');
      setIsLandscape(width > height);
    };
    // Initial check
    updateOrientation();
    // Subscribe to dimension changes
    const subscription = Dimensions.addEventListener(
      'change',
      updateOrientation,
    );
    // Clean up the subscription
    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../assets/images/profile.png')} />
        {isLandscape && (
          <View style={styles.hiddenLogo}>
            <Image
              source={require('../../assets/images/GamingPlatforms.png')}
            />
          </View>
        )}
        <View style={styles.dualIconContainer}>
          <Image source={require('../../assets/images/DirectChat.png')} />
          <View style={styles.spacer} />
          <Image source={require('../../assets/images/notificationIcon.png')} />
        </View>
      </View>
      {!isLandscape && (
        <View style={styles.title}>
          <Image source={require('../../assets/images/GamingPlatforms.png')} />
        </View>
      )}

      <View style={styles.body}>
        <FlatList
          data={imageData}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Rectangle
              uri={item.uri}
              id={item.id}
              onPress={function (): void {
                throw new Error('Function not implemented.');
              }}
            />
          )}
          contentContainerStyle={styles.flatlist}
        />
      </View>
      <View style={styles.polygonButton}>
        <Image source={require('../../assets/images/Polygon.png')} />
      </View>
    </SafeAreaView>
  );
};

export default PlatformPage;
