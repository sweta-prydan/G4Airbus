import React from 'react';
import { ImageBackground, View, SafeAreaView, ScrollView } from 'react-native';

//style
import styles from './style';

//images
import Images from '../../utils/images';

//  Components
import Header from '../../components/Header';
import Button from '../../components/Button/index';

const DatabaseSettingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={Images.background} style={styles.image}>
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.container}>
            <Header
              navigation={navigation}
              headerText="Upload DownloadDatabase Setting"
            />

            <View style={styles.layout}>
              <Button
                buttonText="By Browser"
                onPress={() => {
                  navigation.navigate('ByBrowserScreen');
                }}
              />

              <View style={styles.separator} />

              <Button
                buttonText="By FTP Server"
                onPress={() => {
                  navigation.navigate('ByFtpServerScreen');
                }}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default DatabaseSettingScreen;
