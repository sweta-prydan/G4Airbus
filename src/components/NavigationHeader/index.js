import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

//style
import styles from './style';

//images
import Images from '../../utils/images';

const NavigationHeader = ({ NavigationHeaderText }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.menuView}>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <Image source={Images.menu} style={styles.icon} />
        </TouchableOpacity>
      </View>

      <View style={styles.separator} />

      <View>
        <TouchableOpacity onPress={() => navigation.navigate('StarScreen')}>
          <Image source={Images.home} style={styles.icon} />
        </TouchableOpacity>
      </View>

      <View style={styles.separator} />

      <View>
        <Text style={styles.header}>{NavigationHeaderText}</Text>
      </View>

      <View style={styles.separator} />

      <View>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <Image source={Images.plus} style={styles.icon} />
        </TouchableOpacity>
      </View>

      <View style={styles.separator} />

      <View>
        <TouchableOpacity onPress={() => navigation.goBack(null)}>
          <Image source={Images.back} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default NavigationHeader;
