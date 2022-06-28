import React, { useState } from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';

import Slider from 'react-native-slider';

//style
import styles from './style';

//color
import { Colors } from '../../constants';

//image
import Images from '../../utils/images';

function SliderLayer({ layerText, onPress }) {
  const [sliderValue, setSliderValue] = useState(100);

  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <View style={styles.layer}>
        <Image style={styles.symbol} source={Images.logo} />
        <View>
          <Text style={styles.text}>{layerText}</Text>

          <View style={styles.slider}>
            <Slider
              step={1}
              minimumValue={0}
              maximumValue={100}
              value={sliderValue}
              style={styles.track}
              minimumTrackTintColor={Colors.bronze}
              maximumTrackTintColor={Colors.davyGrey}
              onValueChange={sliderValue => setSliderValue(sliderValue)}
              thumbStyle={styles.thumb}
            />

            <View style={styles.separator} />

            <Text style={styles.text1}> {sliderValue} %</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
export default SliderLayer;
