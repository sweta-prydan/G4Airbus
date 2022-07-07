import React from 'react';
import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  ImageBackground,
} from 'react-native';

//style
import styles from './style';

//images
import Images from '../../../utils/images';

//Components
import { NavigationHeader } from '../../../components';

const OtherControl = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={Images.background} style={styles.image}>
        <View>
          <NavigationHeader
            NavigationHeaderText="OtherControl"
            onPress={() => navigation.navigate('OtherSetting')}
          />
        </View>

        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.container}>
            <View style={styles.childView}>
              <View style={styles.separator} />

              <View>
                <Text style={styles.text}>No Data Found</Text>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};
export default OtherControl;
