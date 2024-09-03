import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  Dimensions,
  FlatList,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import CustomButton from '../CustomButtons/CustomButton';
import styles from './paymentStyle';

const PaymentPage = () => {
  const [isLandscape, setIsLandscape] = useState(false);

  const buttonData = [
    {
      id: '1',
      label: 'CashApp',
      onPress: () => {
        console.log('CashApp pressed');
      },
    },
    {
      id: '2',
      label: 'PayPal',
      onPress: () => {
        console.log('PayPal pressed');
      },
    },
    {
      id: '3',
      label: 'Skrill',
      onPress: () => {
        console.log('Skrill pressed');
      },
    },
    {
      id: '4',
      label: 'Crypto',
      onPress: () => {
        console.log('Crypto pressed');
      },
    },
    {
      id: '5',
      label: 'Credit/Debit Card',
      onPress: () => {
        console.log('Card pressed');
      },
    },
  ];

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
          <Image source={require('../../assets/images/profileYellow.png')} />
        </TouchableOpacity>
        {isLandscape && (
          <View style={styles.hiddenLogo}>
            <Text style={styles.titleText}>Payment</Text>
          </View>
        )}
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
      </View>
      {/* TITLE */}
      {!isLandscape && (
        <View style={styles.title}>
          <Text style={styles.titleText}>Payment</Text>
        </View>
      )}
      {/* BODY */}
      <View style={styles.body}>
        <FlatList
          data={buttonData}
          contentContainerStyle={styles.flatlist}
          renderItem={({item}) => (
            <CustomButton
              text={item.label}
              color="#902BB4"
              width={322}
              height={55}
              onPress={function (): void {
                console.log('Function not implemented.');
              }}
            />
          )}
        />
      </View>
      <View style={styles.polygonButton}>
        <TouchableOpacity>
          <Image source={require('../../assets/images/polygonPurple.png')} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PaymentPage;
