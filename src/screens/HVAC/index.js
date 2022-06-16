import React from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  SafeAreaView,
  ImageBackground,
} from 'react-native';

//images
import Images from '../../utils/images';

//style
import styles from './style';

//components
import Header from '../../components/Header';
import { PowerOff, PowerOn } from '../../components';
import CentralControl from '../../components/CentralControl';

const HVACScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={Images.background} style={styles.image}>
        <Header navigation={navigation} headerText="Central Control" />

        <SafeAreaView>
          <ScrollView>
            <View>
              <View style={styles.separator} />

              <CentralControl />
              <View style={styles.main}>
                <PowerOn />
                <PowerOff />
              </View>

              <View style={styles.main}>
                <View style={[styles.button, styles.number, styles.main]}>
                  <Image source={Images.cold} style={styles.symbol} />

                  <Text style={styles.buttonText}>Cold</Text>
                </View>

                <View style={[styles.button, styles.number, styles.main]}>
                  <Image source={Images.acfan} style={styles.symbol} />

                  <Text style={styles.buttonText}>Fan</Text>
                </View>
              </View>

              <View style={styles.main}>
                <View style={[styles.button, styles.number, styles.main]}>
                  <Image source={Images.heat} style={styles.symbol} />

                  <Text style={styles.buttonText}>Heat</Text>
                </View>

                <View style={[styles.button, styles.number, styles.main]}>
                  <Image source={Images.acsetting} style={styles.symbol} />

                  <Text style={styles.buttonText}>Auto</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};
export default HVACScreen;
