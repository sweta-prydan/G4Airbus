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
            navigation={navigation}
            NavigationHeaderText="     Fan     "
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
                        style={styles.track}
                        maximumValue={4}
                        minimumValue={0}
                        minimumTrackTintColor={Colors.bronze}
                        maximumTrackTintColor={Colors.transform}
                        step={1}
                        value={sliderValue}
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
