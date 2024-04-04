import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import {styles} from '../../utils';
import {color} from '../../utils/styles';

interface ButtonProps {
  title: string;
  disabled?: boolean;
  marginTop?: number;
  containerStyle?: any;
  onClick?: () => void;
  type?: string;
}

const ButtonGradient: React.FC<ButtonProps> = props => {
  // switch (type) {
  //   case 'danger':
  //     colors = ['#FF8C8C', '#FFB6B6']; // Soft red gradient for danger
  //     break;
  //   case 'warning':
  //     colors = ['#FFD57E', '#FFEDB3']; // Soft orange gradient for warning
  //     break;
  //   case 'success':
  //     colors = ['#A3FFA3', '#D3FFD3']; // Soft green gradient for success
  //     break;
  //   case 'info':
  //     colors = ['#A8D8FF', '#D6EFFF']; // Soft blue gradient for info
  //     break;
  //   default:
  //     colors = ['#E0E0E0', '#F5F5F5']; // Soft grey gradient for default
  // }
  let colorType: any;
  switch (props.type) {
    case 'danger':
      colorType = ['#FF6347', '#FF4500']; // Red gradient for danger
      break;
    case 'warning':
      colorType = ['#FFD700', '#FFA500']; // Orange gradient for warning
      break;
    case 'success':
      colorType = ['#32CD32', '#008000']; // Green gradient for success
      break;
    case 'info':
      colorType = ['#1E90FF', '#4169E1']; // Blue gradient for info
      break;
    case 'slate':
      colorType = ['#D3D3D3', '#808080']; // Default gradient for other types
      break;
    default:
      colorType = [color.green11, color.blue7];
  }

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      disabled={props.disabled}
      onPress={props.onClick}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={colorType}
        style={[
          stylesCust.linearGradient,
          {marginTop: props.marginTop, opacity: props.disabled ? 0.4 : 1},
          props.containerStyle,
        ]}>
        <Text style={styles.h4(color.white)}>{props.title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const stylesCust = StyleSheet.create({
  linearGradient: {
    height: 48,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ButtonGradient;
