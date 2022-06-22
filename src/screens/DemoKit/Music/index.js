import React, { useState } from 'react';
import {
  View,
  Image,
  ScrollView,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import Slider from 'react-native-slider';

//images
import Images from '../../../utils/images';

//Components
import { NavigationHeader } from '../../../components';

//style
import styles from './style';

//color
import { Colors } from '../../../constants';

const Music = ({ navigation }) => {
  const [istvEnabled, setIsTvEnabled] = useState(true);
  const [sliderValue, setSliderValue] = useState(100);
  const [issimEnabled, setIsSimEnabled] = useState(true);
  const [isradioEnabled, setIsRadioEnabled] = useState(true);
  const [isspeakerEnabled, setIsSpeakerEnabled] = useState(true);
  const [ischromeEnabled, setIsChromeEnabled] = useState(true);

  return (
    <View style={styles.container}>
      <ImageBackground source={Images.background} style={styles.image}>
        <View>
          <NavigationHeader
            navigation={navigation}
            NavigationHeaderText="Music"
          />
        </View>

        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.container}>
            <View>
              <View style={styles.separator} />

              <View style={styles.main}>
                <TouchableOpacity
                  onPress={() => setIsSimEnabled(!issimEnabled)}>
                  <Image
                    source={issimEnabled ? Images.sdcard : Images.sdunseclect}
                    style={styles.icon}
                  />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setIsTvEnabled(!istvEnabled)}>
                  <Image
                    source={istvEnabled ? Images.tv : Images.tvunselect}
                    style={styles.icon}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => setIsRadioEnabled(!isradioEnabled)}>
                  <Image
                    source={
                      isradioEnabled ? Images.radio : Images.radiounselect
                    }
                    style={styles.icon}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => setIsSpeakerEnabled(!isspeakerEnabled)}>
                  <Image
                    source={
                      isspeakerEnabled ? Images.speaker : Images.speckerunselect
                    }
                    style={styles.icon}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => setIsChromeEnabled(!ischromeEnabled)}>
                  <Image
                    source={
                      ischromeEnabled ? Images.chrome : Images.chromeunselect
                    }
                    style={styles.icon}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.separator} />

              <View style={styles.childView}>
                <View>
                  <Image source={Images.volumeon} style={styles.volume} />
                  <View style={styles.separator} />
                  <View style={styles.separator} />

                  <View style={styles.slider}>
                    <Slider
                      style={styles.track}
                      maximumValue={100}
                      minimumValue={0}
                      minimumTrackTintColor={Colors.pearlAqua}
                      maximumTrackTintColor={Colors.davyGrey}
                      step={1}
                      value={sliderValue}
                      onValueChange={sliderValue => setSliderValue(sliderValue)}
                      thumbStyle={styles.thumb}
                    />
                  </View>

                  <View style={styles.separator} />
                  <View style={styles.separator} />

                  <Image source={Images.volumemute} style={styles.volume} />
                </View>
                <View style={styles.down}>
                  <View style={styles.button}>
                    <Image source={Images.imgStop} style={styles.stop} />

                    <View>
                      <ImageBackground
                        source={Images.layout}
                        style={styles.group}>
                        <Image source={Images.imgLeft} style={styles.stop} />
                        <Image source={Images.imgPlay} style={styles.play} />
                        <Image source={Images.imgRight} style={styles.stop} />
                      </ImageBackground>
                    </View>

                    <Image source={Images.imgStopque} style={styles.stop} />
                  </View>
                  <View style={styles.separator} />
                  <View style={styles.separator} />
                  <View style={styles.separator} />

                  <View style={styles.button1}>
                    <Image source={Images.imageup} style={styles.secondrow} />
                    <Image source={Images.repeat} style={styles.secondrow} />
                    <Image
                      source={Images.imgPlayque}
                      style={styles.secondrow}
                    />

                    <Image source={Images.imgPlus} style={styles.secondrow} />
                    <Image source={Images.editQueue} style={styles.secondrow} />
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
export default Music;
