import React, { useState } from 'react';
import {
  View,
  Image,
  ScrollView,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

//images
import Images from '../../../utils/images';

//Components
import { NavigationHeader } from '../../../components';

//style
import styles from './style';

const Ac = ({ navigation }) => {
  const [isfanslowEnabled, setIsFanSlowEnabled] = useState(true);
  const [isfanmediumEnabled, setIsFanMediumEnabled] = useState(true);
  const [isfanFastEnabled, setIsFanFastEnabled] = useState(true);

  return (
    <View style={styles.container}>
      <ImageBackground source={Images.background} style={styles.image}>
        <View>
          <NavigationHeader
            onPress={() => {
              navigation.navigate('ACSetting');
            }}
            NavigationHeaderText="AC"
          />
        </View>

        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.container}>
            <View>
              <View style={styles.separator} />

              <View style={styles.childView}>
                <Image style={styles.temp} source={Images.bigTemperature} />

                <View style={styles.separator} />
                <View style={styles.separator} />

                <View style={styles.row}>
                  <Image source={Images.heatIcon} style={styles.icon} />
                  <Image source={Images.fanTitle} style={styles.icon} />
                  <Image source={Images.cool} style={styles.icon} />
                </View>

                <View style={styles.separator} />
                <View style={styles.separator} />

                <View style={styles.row}>
                  <TouchableOpacity
                    onPress={() => setIsFanSlowEnabled(!isfanslowEnabled)}>
                    <Image
                      source={
                        isfanslowEnabled ? Images.fanSlow : Images.fanSlowO
                      }
                      style={styles.icon}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => setIsFanMediumEnabled(!isfanmediumEnabled)}>
                    <Image
                      source={
                        isfanmediumEnabled
                          ? Images.fanMedium
                          : Images.fanMediumO
                      }
                      style={styles.icon}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => setIsFanFastEnabled(!isfanFastEnabled)}>
                    <Image
                      source={
                        isfanFastEnabled ? Images.fanFast : Images.fanFastO
                      }
                      style={styles.icon}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};
export default Ac;
