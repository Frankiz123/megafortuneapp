import React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';

const Rectangle = ({
  uri,
  id,
  onPress,
}: {
  uri: any;
  id: string;
  onPress: () => void;
}) => {
  const isSpecial = id === '1';
  return (
    <TouchableOpacity onPress={onPress} style={style.rectangle}>
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
