import React from 'react';
import { Text, TouchableOpacity, Image, View } from 'react-native';

//style
import styles from './style';

//image
import Images from '../../utils/images';

const RoundCard = ({ cardText, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={Images.room} style={styles.image} />
      <View style={styles.separator} />
      <Text style={styles.text}>{cardText}</Text>
      <View style={styles.separator} />
      <View style={styles.separator} />
    </TouchableOpacity>
  );
};
export default RoundCard;
