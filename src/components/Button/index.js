import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

//style
import styles from './style';

const Button = ({ buttonText, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{buttonText}</Text>
    </TouchableOpacity>
  );
};
export default Button;
