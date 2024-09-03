import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  Text,
  ScrollView,
} from 'react-native';
import styles from './HomeStyle';

const HomePage = () => {
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
      {/* header */}
      <ImageBackground
        style={styles.header}
        source={require('../../assets/images/headerImage.png')}>
        <TouchableOpacity
          style={styles.profileButtonContainer}
          onPress={() => console.log('Pressed Profile Button')}>
          <Image source={require('../../assets/images/profileYellow.png')} />
        </TouchableOpacity>
        <Image
          source={require('../../assets/images/headerLogo.png')}
          style={[
            styles.headerLogoImage,
            isLandscape && styles.headerLogoImageSmall,
          ]}
        />
        <View style={styles.dualIconContainer}>
          <TouchableOpacity
            onPress={() => console.log('Pressed Message Button')}>
            <Image
              source={require('../../assets/images/DirectChatYellow.png')}
            />
          </TouchableOpacity>
          <View style={styles.spacer} />
          <TouchableOpacity
            onPress={() => console.log('Pressed Notification Button')}>
            <Image
              source={require('../../assets/images/notificationYellow.png')}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>

      {/* BODY */}
      <View style={[styles.body, isLandscape && styles.bodyLandscape]}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.bodyBlock2}>
            <View style={styles.titleAndInviteContainer}>
              <Text style={styles.luckyPartnerText}>Your Lucky Partner!</Text>
              <TouchableOpacity>
                <Image
                  source={require('../../assets/images/inviteButtonTp.png')}
                  style={{tintColor: '#902BB4'}}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.spacer2} />
            <Text style={styles.officialDistributorText}>
              🤝 Mega Fortune is an official distributor for credits.
            </Text>
            <Text style={styles.paragraph}>
              Tap the message button below to begin creating your account and
              unlock new feature information related to our 15+ gaming systems.
            </Text>
            <View style={styles.spacer2} />
            <View style={styles.titleAndInviteContainer}>
              <View>
                <Text style={styles.openText}>Open 24/7</Text>
                <Text style={styles.chatNowText}>
                  Chat Now For Exciting Offers!
                </Text>
              </View>
              <TouchableOpacity>
                <Image
                  source={require('../../assets/images/messageButton.png')}
                  style={{tintColor: '#902BB4'}}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.divider} />
          <View style={styles.bodyBlock2}>
            <TouchableOpacity>
              <Image
                source={require('../../assets/images/cashReloadButton2.png')}
              />
            </TouchableOpacity>
            <View style={styles.spacer2} />
            <Image source={require('../../assets/images/ImageBox.png')} />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomePage;
