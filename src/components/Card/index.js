import React from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

//style
import styles from './style';

//image
import Images from '../../utils/images';

const Card = ({ layerText, onPress, Banner }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <View style={styles.layer}>
        <ImageBackground style={styles.banner} source={Banner}>
          <Image source={Images.arrow} style={styles.arrow} />

          <View style={styles.round}>
            <View style={styles.Header}>
              <Text style={styles.text}>{layerText}</Text>
            </View>

            <View>
              <Image source={Images.edit} style={styles.icon} />
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};
export default Card;
