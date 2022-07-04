import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

//images
import Images from '../../../../utils/images';

//Components
import { Button, CentralHeader, Input } from '../../../../components';

//style
import styles from './style';

const MoodSetting = ({ navigation }) => {
  const [isDmx, setDmx] = React.useState(false);
  const [isHvac, setHvac] = React.useState(false);
  const [isRgbw, setRgbw] = React.useState(false);
  const [title, onChangeTitle] = React.useState();
  const [isLight, setLight] = React.useState(false);
  const [isAudio, setAudio] = React.useState(false);
  const [isCamera, setCamera] = React.useState(false);
  const [isCurtain, setCurtain] = React.useState(false);
  const [isIrrigation, setIrrigation] = React.useState(false);

  return (
    <View style={styles.container}>
      <ImageBackground source={Images.background} style={styles.image}>
        <View>
          <CentralHeader
            headerText={'Mood Setting'}
            navigation={() => {
              navigation.goBack(null);
            }}
            onPress={() => navigation.navigate('StarScreen')}
          />
        </View>

        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.container}>
            <View style={styles.row}>
              <TouchableOpacity onPress={setLight}>
                <Image
                  source={!isLight ? Images.grayUncheck : Images.grayCheck}
                  style={styles.checkbox}
                />
              </TouchableOpacity>

              <Text style={styles.text}>Light</Text>

              <TouchableOpacity onPress={setHvac}>
                <Image
                  source={!isHvac ? Images.grayUncheck : Images.grayCheck}
                  style={styles.checkbox}
                />
              </TouchableOpacity>

              <Text style={styles.text}>HVAC</Text>
            </View>

            <View style={styles.row}>
              <TouchableOpacity onPress={setAudio}>
                <Image
                  source={!isAudio ? Images.grayUncheck : Images.grayCheck}
                  style={styles.checkbox}
                />
              </TouchableOpacity>

              <Text style={styles.text}>Z-audio</Text>

              <TouchableOpacity onPress={setCurtain}>
                <Image
                  source={!isCurtain ? Images.grayUncheck : Images.grayCheck}
                  style={styles.checkbox}
                />
              </TouchableOpacity>

              <Text style={styles.text}>Curtain</Text>
            </View>

            <View style={styles.row}>
              <TouchableOpacity onPress={setIrrigation}>
                <Image
                  source={!isIrrigation ? Images.grayUncheck : Images.grayCheck}
                  style={styles.checkbox}
                />
              </TouchableOpacity>

              <Text style={styles.text}>Irrigation</Text>

              <TouchableOpacity onPress={setDmx}>
                <Image
                  source={!isDmx ? Images.grayUncheck : Images.grayCheck}
                  style={styles.checkbox}
                />
              </TouchableOpacity>

              <View>
                <Text style={styles.text}>DMX</Text>
              </View>
            </View>

            <View style={styles.row}>
              <TouchableOpacity onPress={setRgbw}>
                <Image
                  source={!isRgbw ? Images.grayUncheck : Images.grayCheck}
                  style={styles.checkbox}
                />
              </TouchableOpacity>

              <Text style={styles.text}>RGBW</Text>

              <TouchableOpacity onPress={setCamera}>
                <Image
                  source={!isCamera ? Images.grayUncheck : Images.grayCheck}
                  style={styles.checkbox}
                />
              </TouchableOpacity>

              <Text style={styles.text}>Camera</Text>
            </View>
            <View style={styles.input}>
              <Input
                value={title}
                text={'Mood Name'}
                onChange={onChangeTitle}
              />

              <View style={styles.separator}>
                <Image source={Images.logo} style={styles.icon} />
                <Button style={styles.button} buttonText={'Record Mood'} />
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};
export default MoodSetting;
