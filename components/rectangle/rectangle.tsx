import React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import InAppBrowser from 'react-native-inappbrowser-reborn';

const Rectangle = ({
  uri,
  id,
  url,
}: {
  uri: any;
  id: string;
  url: string; // Assuming the URL is a string
}) => {
  const isSpecial = id === '1';

  const openLink = async (url: string) => {
    try {
      if (await InAppBrowser.isAvailable()) {
        await InAppBrowser.open(url, {
          // Optional customization options
          dismissButtonStyle: 'cancel',
          preferredBarTintColor: '#453AA4',
          preferredControlTintColor: 'white',
          readerMode: false,
          animated: true,
          modalPresentationStyle: 'fullScreen',
          modalTransitionStyle: 'coverVertical',
          modalEnabled: true,
          enableBarCollapsing: true,
          showTitle: true,
          toolbarColor: '#6200EE',
          secondaryToolbarColor: 'black',
          enableUrlBarHiding: true,
          enableDefaultShare: true,
        });
      } else {
        alert('InAppBrowser is not supported on this device.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TouchableOpacity onPress={() => openLink(url)} style={style.rectangle}>
      <Image
        source={uri}
        style={isSpecial ? style.gameLogosSmall : style.gameLogos}
      />
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  rectangle: {
    width: 93.64,
    height: 95.16,
    marginBottom: 18,
    marginHorizontal: 15,
    justifyContent: 'center',
    borderRadius: 30,
    backgroundColor: '#7209B7',
  },
  gameLogos: {
    width: 93,
    height: 85,
  },
  gameLogosSmall: {
    width: 93,
    height: 46,
  },
});

export default Rectangle;
function alert(_arg0: string) {
  throw new Error('Function not implemented.');
}
