import React from 'react';
import { ImageBackground, View, SafeAreaView, ScrollView } from 'react-native';

//style
import styles from './style';

//images
import Images from '../../../utils/images';

//Components
import { ArrowLayer, NavigationHeader } from '../../../components';

const Dmx = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={Images.background} style={styles.image}>
        <View>
          <NavigationHeader
            navigation={navigation}
            NavigationHeaderText="DMX"
          />
        </View>

        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.container}>
            <View>
              <View style={styles.separator} />

              <View style={styles.childView}>
                <ArrowLayer arrowText={'DMX Group'} />
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};
export default Dmx;
