import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';

//style
import styles from './style';

const Layer = ({ layerText, onPress, Icon }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <View style={styles.layer}>
        <Image style={styles.symbol} source={Icon} />
        <Text style={styles.text}>{layerText}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default Layer;
