import React from 'react';
import { Image, Text, View } from 'react-native';

//style
import styles from './style';

// Images
import Images from '../../utils/images';

const Logo = ({ Heading }) => {
  return (
    <View style={styles.container}>
      <View style={styles.contain}>
        <Image source={Images.logo} style={styles.logo} />

        <View>
          <Text style={styles.text}>{Heading}</Text>
        </View>
      </View>
    </View>
  );
};
export default Logo;
