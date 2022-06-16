import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

//style
import styles from './style';

//images
import Images from '../../utils/images';

const DemoHeader = ({ DemoHeaderText }) => {
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
        <TouchableOpacity
          onPress={() => {
            navigation.goBack(null);
          }}>
          <Image source={Images.home} style={styles.icon} />
        </TouchableOpacity>
      </View>

      <View style={styles.separator} />

      <View>
        <Text style={styles.header}>{DemoHeaderText}</Text>
      </View>

      <View style={styles.separator} />

      <View>
        <Image source={Images.setting} style={styles.icon} />
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
export default DemoHeader;
