import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';

//style
import styles from './style';

//images
import Images from '../../utils/images';

const CentralHeader = ({ headerText, navigation, onPress }) => {
  return (
    <View style={styles.menuView}>
      <TouchableOpacity>
        <Image source={Images.menu} style={styles.icon} />
      </TouchableOpacity>

      <View style={styles.separator} />

      <TouchableOpacity onPress={onPress}>
        <Image source={Images.home} style={styles.icon} />
      </TouchableOpacity>

      <Text style={styles.header}>{headerText}</Text>

      <TouchableOpacity onPress={navigation}>
        <Image source={Images.back} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};
export default CentralHeader;
