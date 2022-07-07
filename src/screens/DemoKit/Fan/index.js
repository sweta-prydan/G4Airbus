import React, { useState } from 'react';
import {
  ImageBackground,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  Text,
} from 'react-native';

import Slider from 'react-native-slider';

import Images from '../../../utils/images';

import { Colors } from '../../../constants';

//Component
import { NavigationHeader } from '../../../components';

//style
import styles from './style';

const Fan = ({ navigation }) => {
  const [sliderValue, setSliderValue] = useState(4);
  return (
    <View style={styles.container}>
      <ImageBackground source={Images.background} style={styles.image}>
        <View>
          <NavigationHeader
            onPress={() => {
              navigation.navigate('FanSetting');
            }}
            NavigationHeaderText="        Fan       "
          />
        </View>

        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.container}>
            <View>
              <View style={styles.separator} />

              <View style={styles.childView}>
                <View style={styles.layer}>
                  <Text style={styles.text}>Fan1</Text>

                  <Image style={styles.symbol} source={Images.fanfour} />
                  <View>
                    <View style={styles.slider}>
                      <Text style={styles.text1}> {sliderValue} </Text>

                      <Slider
                        step={1}
                        maximumValue={4}
                        minimumValue={0}
                        value={sliderValue}
                        style={styles.track}
                        minimumTrackTintColor={Colors.bronze}
                        maximumTrackTintColor={Colors.transform}
                        onValueChange={sliderValue =>
                          setSliderValue(sliderValue)
                        }
                        thumbStyle={styles.thumb}
                        thumbImage={Images.frequently}
                      />

                      <View style={styles.separator} />
                    </View>
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
export default Fan;
