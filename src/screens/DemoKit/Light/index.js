import React from 'react';
import { ImageBackground, View, SafeAreaView, ScrollView } from 'react-native';

//images
import Images from '../../../utils/images';

//Components
import {
  SliderLayer,
  NavigationHeader,
  SwitchLayer,
} from '../../../components';

//style
import styles from './style';

const Light = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={Images.background} style={styles.image}>
        <View>
          <NavigationHeader
            navigation={navigation}
            NavigationHeaderText="Light"
            onPress={() => navigation.navigate('LightSetting')}
          />
        </View>

        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.container}>
            <View>
              <View style={styles.separator} />

              <View style={styles.childView}>
                <View>
                  <SliderLayer layerText={'Dimmable'} />
                </View>

                <View>
                  <SwitchLayer switchText={'Non_Dim'} />
                  <SwitchLayer switchText={'LED'} />
                </View>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};
export default Light;
