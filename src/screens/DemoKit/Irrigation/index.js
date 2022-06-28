import React from 'react';
import { ImageBackground, View, SafeAreaView, ScrollView } from 'react-native';

//images
import Images from '../../../utils/images';

//Components
import { NavigationHeader, Button } from '../../../components';

//style
import styles from './style';

const Irrigation = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={Images.background} style={styles.image}>
        <View>
          <NavigationHeader
            navigation={navigation}
            NavigationHeaderText="Irrigation"
          />
        </View>

        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.container}>
            <View>
              <View style={styles.separator} />

              <View style={styles.childView}>
                <View style={styles.button}>
                  <Button buttonText={'All Stop'} style={styles.button} />
                </View>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};
export default Irrigation;
