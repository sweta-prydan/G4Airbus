import * as React from 'react';

import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  ImageBackground,
} from 'react-native';

//images
import Images from '../../utils/images';

//Components
import Button from '../../components/Button';
import Header from '../../components/Header';

//style
import styles from './style';

const LanguageSettingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={Images.background} style={styles.image}>
        <Header navigation={navigation} headerText="Language Setting" />

        <SafeAreaView style={styles.container}>
          <ScrollView>
            <Text style={styles.lang}> English</Text>

            <Text style={styles.lang}> Gujarati</Text>

            <Text style={styles.lang}> Hindi</Text>

            <Text style={styles.lang}> Chinese</Text>

            <View style={styles.layout}>
              <View style={styles.button}>
                <Button
                  buttonText="Ok "
                  onPress={() => navigation.navigate('LanguageSettingScreen')}
                />
              </View>

              <View style={styles.button}>
                <Button
                  buttonText="Cancel"
                  onPress={() => navigation.navigate('SettingScreen')}
                />
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};
export default LanguageSettingScreen;
