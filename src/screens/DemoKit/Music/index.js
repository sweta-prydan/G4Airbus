import React, { useState } from 'react';
import {
  Text,
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

const Music = ({ navigation }) => {
  const [issimEnabled, setIsSimEnabled] = useState(true);
  const [istvEnabled, setIsTvEnabled] = useState(true);
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
                <View style={styles.down}>
                  <View style={styles.button}>
                    <Image source={Images.imgStop} style={styles.icon} />
                    <Image source={Images.imgLeft} style={styles.icon} />
                    <Image source={Images.imgPlay} style={styles.icon} />
                    <Image source={Images.imgRight} style={styles.icon} />
                    <Image source={Images.imgStopque} style={styles.icon} />
                  </View>
                  {/* <View style={styles.separator} />
                  <View style={styles.separator} /> */}
                  <View style={styles.button1}>
                    <Image source={Images.imageup} style={styles.icon} />
                    <Image source={Images.repeat} style={styles.icon} />
                    <Image source={Images.imgPlayque} style={styles.icon} />
                    <Image source={Images.imgPlus} style={styles.icon} />
                    <Image source={Images.editQueue} style={styles.icon} />
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
