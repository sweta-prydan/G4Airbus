import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

//style
import styles from './style';

//image
import Images from '../../utils/images';

const PowerOff = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={Images.powerOn} style={styles.icon} />
    </TouchableOpacity>
  );
};
export default PowerOff;
