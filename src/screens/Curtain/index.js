import React from 'react';
import { ImageBackground, View, SafeAreaView, ScrollView } from 'react-native';

//style
import styles from './style';

//images
import Images from '../../utils/images';

// components
import Button from '../../components/Button';
import Header from '../../components/Header';
import CentralControl from '../../components/CentralControl';

const CurtainScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={Images.background} style={styles.image}>
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.container}>
            <Header navigation={navigation} headerText="Central Control" />

            <View>
              <View style={styles.separator} />

              <CentralControl />

              <View style={styles.button}>
                <View style={styles.number}>
                  <Button buttonText={'All Open'} />
                </View>

                <View style={styles.number}>
                  <Button buttonText={'All Close'} />
                </View>
              </View>

              <View style={styles.button}>
                <View style={styles.number}>
                  <Button buttonText={'All Stop'} />
                </View>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};
export default CurtainScreen;
