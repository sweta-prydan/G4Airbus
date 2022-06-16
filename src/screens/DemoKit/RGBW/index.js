import React from 'react';
import { ImageBackground, View, SafeAreaView, ScrollView } from 'react-native';

//images
import Images from '../../../utils/images';

import { NavigationHeader, ArrowLayer } from '../../../components';

//style
import styles from './style';

const RGBW = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={Images.background} style={styles.image}>
        <View>
          <NavigationHeader
            navigation={navigation}
            NavigationHeaderText="RGBW"
          />
        </View>
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.container}>
            <View>
              <View style={styles.separator} />
              <View style={styles.childView}>
                <ArrowLayer arrowText={'RGBW'} />
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};
export default RGBW;
