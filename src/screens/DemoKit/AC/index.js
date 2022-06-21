import React from 'react';
import { ImageBackground, View, SafeAreaView, ScrollView } from 'react-native';

//images
import Images from '../../../utils/images';

//Components
// import Button from '../../../components/Button';
import { NavigationHeader } from '../../../components';

//style
import styles from './style';

const Ac = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={Images.background} style={styles.image}>
        <View>
          <NavigationHeader navigation={navigation} NavigationHeaderText="AC" />
        </View>
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.container}>
            <View>
              <View style={styles.separator} />
              <View style={styles.childView}>
                {/* <ScreenLayer /> */}
              </View>
              {/* <View style={styles.button}></View> */}
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};
export default Ac;
