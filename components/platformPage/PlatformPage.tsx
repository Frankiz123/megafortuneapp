import React, {useEffect, useState} from 'react';
import {View, Image, Dimensions, FlatList} from 'react-native';
import styles from './platformStyle';
import Rectangle from '../rectangle/rectangle';
import {SafeAreaView} from 'react-native-safe-area-context';

const PlatformPage = () => {
  const imageData = [
    {
      id: '1',
      uri: require('../../assets/images/orionStars.png'),
      url: 'http://start.orionstars.vip:8580/index.html',
    },
    {
      id: '2',
      uri: require('../../assets/images/fireKirin.png'),
      url: 'http://play.firekirin.in/web_mobile/firekirin_pc/',
    },
    {
      id: '3',
      uri: require('../../assets/images/blueDragon.png'),
      url: 'https://blue-dragon.games/',
    },
    {
      id: '4',
      uri: require('../../assets/images/jackyStars.png'),
      url: 'https://www.luckystars.games/m',
    },
    {
      id: '5',
      uri: require('../../assets/images/GameVault.png'),
      url: 'https://download.gamevault999.com/',
    },
    {
      id: '6',
      uri: require('../../assets/images/Juwa.png'),
      url: 'https://juwa777.com/',
    },
    {
      id: '7',
      uri: require('../../assets/images/ultraPanda.png'),
      url: 'http://www.ultrapanda.mobi/',
    },
    {
      id: '8',
      uri: require('../../assets/images/lasVegas.png'),
      url: 'https://m.lasvegassweeps.com/',
    },
    {
      id: '9',
      uri: require('../../assets/images/pandaMaster.png'),
      url: 'https://pandamaster.vip:8888/',
    },
    {
      id: '10',
      uri: require('../../assets/images/R.png'),
      url: 'https://riverslot.net/',
    },
    {
      id: '11',
      uri: require('../../assets/images/vBlinck.png'),
      url: 'http://www.vblink777.club/',
    },
    {
      id: '12',
      uri: require('../../assets/images/egame.png'),
      url: 'https://www.egame99.club/',
    },
    {
      id: '13',
      uri: require('../../assets/images/dragonCrown.png'),
      url: 'https://dragoncrown.win/',
    },
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
            <Rectangle uri={item.uri} id={item.id} url={item.url} />
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
