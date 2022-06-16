import React from 'react';
import { ImageBackground, View, SafeAreaView, ScrollView } from 'react-native';

//images
import Images from '../../utils/images';

//Components
import Header from '../../components/Header';
import { PowerOff, PowerOn } from '../../components';
import CentralControl from '../../components/CentralControl';

//style
import styles from './style';

const DMXScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={Images.background} style={styles.image}>
        <Header navigation={navigation} headerText="Central Control" />
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.container}>
            <View style={styles.separator} />

            <CentralControl />

            <View style={styles.main}>
              <PowerOn />
              <PowerOff />
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};
export default DMXScreen;
