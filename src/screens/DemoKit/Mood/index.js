import React from 'react';
import { ImageBackground, View, SafeAreaView, ScrollView } from 'react-native';

//style
import styles from './style';

//images
import Images from '../../../utils/images';

//Components
// import Button from '../../../components/Button';
import { ScreenLayer, NavigationHeader } from '../../../components';

const Mood = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={Images.background} style={styles.image}>
        <View>
          <NavigationHeader
            navigation={navigation}
            NavigationHeaderText="Mood"
          />
        </View>
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.container}>
            <View style={styles.childView}>
              <View>
                <View style={styles.separator} />

                <ScreenLayer />
              </View>

              {/* <View style={styles.button}></View> */}
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};
export default Mood;
