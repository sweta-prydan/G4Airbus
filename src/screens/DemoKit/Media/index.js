import React from 'react';
import { ImageBackground, View, SafeAreaView, ScrollView } from 'react-native';

//images
import Images from '../../../utils/images';

//Components
import { NavigationHeader, RoundCard } from '../../../components';

//style
import styles from './style';

const Media = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={Images.background} style={styles.image}>
        <View>
          <NavigationHeader
            navigation={navigation}
            NavigationHeaderText="Media"
          />
        </View>

        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.container}>
            <View style={styles.childView}>
              <View>
                <View style={styles.separator} />

                <View style={styles.main}>
                  <View>
                    <RoundCard cardText={'TV'} />
                  </View>

                  <View>
                    <RoundCard cardText={'DVD'} />
                  </View>
                </View>
              </View>

              <View>
                <View style={styles.separator} />

                <View style={styles.main}>
                  <View>
                    <RoundCard cardText={'Apple TV'} />
                  </View>

                  <View>
                    <RoundCard cardText={'Satelite'} />
                  </View>
                </View>
              </View>

              <View>
                <View style={styles.separator} />
                <View style={styles.main}>
                  <View>
                    <RoundCard cardText={'Projector'} />
                  </View>

                  <View>
                    <RoundCard cardText={'Roku'} />
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};
export default Media;
