import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

//style
import styles from './style';

//image
import Images from '../../utils/images';

const PowerOn = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={Images.powerOff} style={styles.icon} />
    </TouchableOpacity>
  );
};
export default PowerOn;
