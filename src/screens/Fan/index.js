import React from 'react';
import { ImageBackground, SafeAreaView, ScrollView, View } from 'react-native';

//images
import Images from '../../utils/images';

//style
import styles from './style';

//components

import {
  Header,
  Button,
  PowerOn,
  PowerOff,
  CentralControl,
} from '../../components';

const FanScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={Images.background} style={styles.image}>
        <Header navigation={navigation} headerText="Central Control" />

        <View>
          <SafeAreaView>
            <ScrollView>
              <View style={styles.separator} />

              <CentralControl />

              <View style={styles.main}>
                <PowerOn />
                <PowerOff />
              </View>

              <View style={styles.button}>
                <View style={styles.number}>
                  <Button buttonText={1} />
                </View>

                <View style={styles.number}>
                  <Button buttonText={2} />
                </View>
              </View>

              <View style={styles.button}>
                <View style={styles.number}>
                  <Button buttonText={3} />
                </View>

                <View style={styles.number}>
                  <Button buttonText={4} />
                </View>
              </View>
            </ScrollView>
          </SafeAreaView>
        </View>
      </ImageBackground>
    </View>
  );
};
export default FanScreen;
