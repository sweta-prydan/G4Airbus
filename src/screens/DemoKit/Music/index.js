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
  const [sliderValue, setSliderValue] = useState(100);
  const [istvEnabled, setIsTvEnabled] = useState(true);
  const [issimEnabled, setIsSimEnabled] = useState(true);
  const [isradioEnabled, setIsRadioEnabled] = useState(true);
  const [ischromeEnabled, setIsChromeEnabled] = useState(true);
  const [isspeakerEnabled, setIsSpeakerEnabled] = useState(true);

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
                    style={styles.icon}
                    source={issimEnabled ? Images.sdcard : Images.sdunseclect}
                  />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setIsTvEnabled(!istvEnabled)}>
                  <Image
                    style={styles.icon}
                    source={istvEnabled ? Images.tv : Images.tvunselect}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => setIsRadioEnabled(!isradioEnabled)}>
                  <Image
                    style={styles.icon}
                    source={
                      isradioEnabled ? Images.radio : Images.radiounselect
                    }
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => setIsSpeakerEnabled(!isspeakerEnabled)}>
                  <Image
                    style={styles.icon}
                    source={
                      isspeakerEnabled ? Images.speaker : Images.speckerunselect
                    }
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => setIsChromeEnabled(!ischromeEnabled)}>
                  <Image
                    style={styles.icon}
                    source={
                      ischromeEnabled ? Images.chrome : Images.chromeunselect
                    }
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
                      step={1}
                      minimumValue={0}
                      maximumValue={100}
                      value={sliderValue}
                      style={styles.track}
                      minimumTrackTintColor={Colors.pearlAqua}
                      maximumTrackTintColor={Colors.davyGrey}
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
