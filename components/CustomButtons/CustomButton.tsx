import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

// Define the props interface for TypeScript
interface CustomButtonProps {
  color: string;
  width: number;
  height: number;
  text: string;
  onPress: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  color,
  width,
  height,
  text,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: color, width, height}]}
      onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

// Define default styles
const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30, // Customize as needed
    margin: 15,
    paddingVertical: 0,
  },
  text: {
    color: '#fff', // Customize text color
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default CustomButton;
