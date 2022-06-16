import React from 'react';
import { ImageBackground, View, SafeAreaView, ScrollView } from 'react-native';

//images
import Images from '../../utils/images';

//Components
import Button from '../../components/Button';
import Header from '../../components/Header';
import { PowerOff, PowerOn } from '../../components';
import CentralControl from '../../components/CentralControl';

//style
import styles from './style';

const Light = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={Images.background} style={styles.image}>
        <Header navigation={navigation} headerText="Central Control" />

        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.container}>
            <View>
              <View style={styles.separator} />

              <CentralControl />

              <View style={styles.main}>
                <PowerOn />
                <PowerOff />
              </View>

              <View style={styles.button}>
                <View style={styles.number}>
                  <Button buttonText={'25%'} />
                </View>

                <View style={styles.number}>
                  <Button buttonText={'50%'} />
                </View>

                <View style={styles.number}>
                  <Button buttonText={'75%'} />
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
