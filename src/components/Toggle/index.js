import React, { useState } from 'react';
import { Text, View } from 'react-native';

import Slider from 'react-native-slider';

//style
import styles from './style';

//color
import Color from '../../constants/color';

const SliderTrack = () => {
  const [sliderValue, setSliderValue] = useState(15);

  return (
    <View style={styles.slider}>
      <Text style={styles.text}> {sliderValue}%</Text>

      <View style={styles.separator} />

      <Slider
        step={1}
        minimumValue={0}
        maximumValue={100}
        value={sliderValue}
        style={styles.track}
        minimumTrackTintColor={Color.bronze}
        maximumTrackTintColor={Color.transform}
        onValueChange={sliderValue => setSliderValue(sliderValue)}
        thumbStyle={styles.thumb}
      />
    </View>
  );
};
export default SliderTrack;
