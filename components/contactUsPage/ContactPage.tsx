import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  ScrollView,
} from 'react-native';
import styles from './contactStyle';

const ContactPage = () => {
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
      <View style={styles.header}>
        <TouchableOpacity onPress={() => console.log('Pressed Profile Button')}>
          <Image source={require('../../assets/images/profile.png')} />
        </TouchableOpacity>
        {isLandscape && (
          <View style={styles.hiddenLogo}>
            <Text style={styles.titleText}>Payment</Text>
          </View>
        )}
        <View style={styles.dualIconContainer}>
          <TouchableOpacity
            onPress={() => console.log('Pressed Message Button')}>
            <Image source={require('../../assets/images/DirectChat.png')} />
          </TouchableOpacity>
          <View style={styles.spacer} />
          <TouchableOpacity
            onPress={() => console.log('Pressed Notification Button')}>
            <Image
              source={require('../../assets/images/notificationIcon.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* TITLE */}
      {!isLandscape && (
        <View style={styles.title}>
          <Text style={styles.titleText}>Terms & Condition</Text>
        </View>
      )}
      {/* BODY */}
      <View style={styles.body}>
        <ScrollView style={{flexDirection: 'column'}}>
          <Text style={styles.heading}>Welcome to Mega Fortune</Text>
          <Text style={styles.paragraph}>
            Welcome to Mega FortuneBy using our gaming purchasing app, you agree
            to our Terms and Conditions. You must be at least 20+ years old and
            provide accurate information when creating an account. All purchases
            are final and non-refundable, and prices may change without notice.
            We grant you a limited, non-transferable license to use the app for
            personal use only, and you must not use it for illegal purposes or
            disrupt the app or other users. All content in the app is owned by
            Mega Fortune or its license. Your use of the app is also governed by
            our Privacy Policy. We may suspend or terminate your access to the
            app at any time. The app is provided "as is," and we disclaim all
            warranties and liabilities. These Terms are governed by the laws of
            [Your Country/State] and may be updated from time to time, with your
            continued use of the app indicating your acceptance of the new
            Terms. If you have any questions or concerns, Please contact us
          </Text>
          <Text style={styles.contactUs}>Contact Us</Text>
          <TextInput
            placeholderTextColor="#902BB4"
            placeholder="Email"
            style={styles.button}
          />
          <View style={styles.spacer} />
          <TextInput
            placeholderTextColor="#902BB4"
            placeholder="Subject"
            style={styles.button}
          />
          <TextInput
            placeholderTextColor="#902BB4"
            placeholder="Your Message"
            style={[styles.messageBox]}
          />
          <TouchableOpacity style={{alignSelf: 'center'}}>
            <Image source={require('../../assets/images/submitButton.png')} />
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ContactPage;
