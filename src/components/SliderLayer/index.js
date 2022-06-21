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
              style={styles.track}
              maximumValue={100}
              minimumValue={0}
              minimumTrackTintColor={Colors.bronze}
              maximumTrackTintColor={Colors.transform}
              step={1}
              value={sliderValue}
              onValueChange={sliderValue => setSliderValue(sliderValue)}
              thumbStyle={styles.thumb}
              thumbImage={Images.thumb}
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
