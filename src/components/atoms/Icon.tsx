import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import Foundation from 'react-native-vector-icons/Foundation';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Zocial from 'react-native-vector-icons/Zocial';
import Fontisto from 'react-native-vector-icons/Fontisto';

interface IconProps {
  name: string;
  color: string;
  size: number;
  opacity?: number;
  library?: string;
  onPress?: () => void;
}

const Icon = ({name, color, size, opacity, library, onPress}: IconProps) => {
  switch (library) {
    case 'AntDesign':
      return (
        <AntDesign
          name={name}
          color={color}
          size={size}
          onPress={onPress}
          style={{opacity: opacity || 1}}
        />
      );
    case 'Entypo':
      return (
        <Entypo
          name={name}
          color={color}
          size={size}
          onPress={onPress}
          style={{opacity: opacity || 1}}
        />
      );
    case 'EvilIcons':
      return (
        <EvilIcons
          name={name}
          color={color}
          size={size}
          onPress={onPress}
          style={{opacity: opacity || 1}}
        />
      );
    case 'Feather':
      return (
        <Feather
          name={name}
          color={color}
          size={size}
          onPress={onPress}
          style={{opacity: opacity || 1}}
        />
      );
    case 'Foundation':
      return (
        <Foundation
          name={name}
          color={color}
          size={size}
          onPress={onPress}
          style={{opacity: opacity || 1}}
        />
      );
    case 'SimpleLineIcons':
      return (
        <SimpleLineIcons
          name={name}
          color={color}
          size={size}
          onPress={onPress}
          style={{opacity: opacity || 1}}
        />
      );
    case 'Octicons':
      return (
        <Octicons
          name={name}
          color={color}
          size={size}
          onPress={onPress}
          style={{opacity: opacity || 1}}
        />
      );
    case 'Zocial':
      return (
        <Zocial
          name={name}
          color={color}
          size={size}
          onPress={onPress}
          style={{opacity: opacity || 1}}
        />
      );
    case 'Fontisto':
      return (
        <Fontisto
          name={name}
          color={color}
          size={size}
          onPress={onPress}
          style={{opacity: opacity || 1}}
        />
      );
    case 'MaterialIcons':
      return (
        <MaterialIcons
          name={name}
          color={color}
          size={size}
          onPress={onPress}
          style={{opacity: opacity || 1}}
        />
      );
    case 'MaterialCommunityIcons':
      return (
        <MaterialCommunityIcons
          name={name}
          color={color}
          size={size}
          onPress={onPress}
          style={{opacity: opacity || 1}}
        />
      );
    case 'Ionicons':
      return (
        <Ionicons
          name={name}
          color={color}
          size={size}
          onPress={onPress}
          style={{opacity: opacity || 1}}
        />
      );
    // case 'FontAwesome6':
    //   return (
    //     <FontAwesome6
    //       name={name}
    //       color={color}
    //       size={size}
    //       onPress={onPress}
    //       style={{opacity: opacity || 1}}
    //     />
    //   );
    default:
      return (
        <FontAwesome5
          name={name}
          color={color}
          size={size}
          onPress={onPress}
          style={{opacity: opacity || 1}}
        />
      );
  }
};

export default Icon;
