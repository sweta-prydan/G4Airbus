import React from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  ImageBackground,
} from 'react-native';

//style
import styles from './style';

//images
import Images from '../../utils/images';

// Components
import Button from '../../components/Button';
import Header from '../../components/Header';

const SettingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={Images.background} style={styles.image}>
        <Header navigation={navigation} headerText="Settings" />

        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.container}>
            <View style={styles.layout}>
              <Button
                onPress={() => navigation.navigate('LanguageSettingScreen')}
                buttonText="Language Setting (Language)"
              />

              <View style={styles.separator} />

              <Button
                onPress={() => navigation.navigate('DatabaseSettingScreen')}
                buttonText="Database Upload & Download"
              />
            </View>

            <View>
              <Text style={styles.version}>Version 2.0</Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default SettingScreen;
