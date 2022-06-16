import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';

//style
import styles from './style';

//images
import Images from '../../utils/images';

const Header = ({ headerText, navigation }) => {
  return (
    <View style={styles.menuView}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack(null);
        }}>
        <Image source={Images.back} style={styles.back} />
      </TouchableOpacity>

      <View style={styles.titleView}>
        <Text style={styles.text}>{headerText}</Text>
      </View>
    </View>
  );
};
export default Header;
