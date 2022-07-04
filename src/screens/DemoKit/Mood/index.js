import React from 'react';
import { ImageBackground, View, SafeAreaView, ScrollView } from 'react-native';

//style
import styles from './style';

//images
import Images from '../../../utils/images';

//Components
import { NavigationHeader, Button } from '../../../components';

const Moods = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={Images.background} style={styles.image}>
        <View>
          <NavigationHeader
            navigation={navigation}
            NavigationHeaderText="Mood"
            onPress={() => navigation.navigate('MoodSetting')}
          />
        </View>

        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.container}>
            <View style={styles.childView}>
              <View style={styles.separator} />

              <Button buttonText={'record Mood'} />
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};
export default Moods;
