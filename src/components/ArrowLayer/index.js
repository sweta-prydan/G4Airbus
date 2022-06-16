import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';

//style
import styles from './style';

//image
import Images from '../../utils/images';

function ArrowLayer({ arrowText, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <View style={styles.layer}>
        <Image style={styles.symbol} source={Images.logo} />

        <View>
          <Text style={styles.text}>{arrowText}</Text>
        </View>

        <View>
          <Image source={Images.arrow} style={styles.arrow} />
        </View>
      </View>
    </TouchableOpacity>
  );
}
export default ArrowLayer;
