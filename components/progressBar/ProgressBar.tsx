import React, {useEffect, useRef, useState} from 'react';
import {View, Animated, ViewStyle} from 'react-native';

// Define the props for the component
interface ProgressBarProps {
  step: number;
  steps: number;
  height: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({step, steps, height}) => {
  const [width, setWidth] = useState<number>(0);
  const animatedValue = useRef(new Animated.Value(-1000)).current;
  const reactive = useRef(new Animated.Value(-1000)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: reactive,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [animatedValue, reactive]);

  useEffect(() => {
    reactive.setValue(-width + (width * step) / steps);
  }, [reactive, step, steps, width]);

  return (
    <View
      onLayout={e => {
        const newWidth = e.nativeEvent.layout.width;
        setWidth(newWidth);
      }}
      style={
        {
          height: 10,
          backgroundColor: 'white',
          borderRadius: height,
          overflow: 'hidden',
        } as ViewStyle
      }>
      <Animated.View
        style={
          {
            height: 10,
            width: '100%',
            borderRadius: height,
            backgroundColor: '#FFA800',
            position: 'absolute',
            left: 0,
            top: 0,
            transform: [
              {
                translateX: animatedValue,
              },
            ],
          } as ViewStyle
        }
      />
    </View>
  );
};

export default ProgressBar;
