import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  Modal,
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
  const [isDmx, setDmx] = useState(false);
  const [isHvac, setHvac] = useState(false);
  const [isRgbw, setRgbw] = useState(false);

  const [title, onChangeTitle] = useState();
  const [isLight, setLight] = useState(false);
  const [isAudio, setAudio] = useState(false);
  const [isCamera, setCamera] = useState(false);
  const [isCurtain, setCurtain] = useState(false);
  const [isIrrigation, setIrrigation] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

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
                  style={styles.checkbox}
                  source={!isLight ? Images.grayUncheck : Images.grayCheck}
                />
              </TouchableOpacity>

              <Text style={styles.text}>Light</Text>

              <TouchableOpacity onPress={setHvac}>
                <Image
                  style={styles.checkbox}
                  source={!isHvac ? Images.grayUncheck : Images.grayCheck}
                />
              </TouchableOpacity>

              <Text style={styles.text}>HVAC</Text>
            </View>

            <View style={styles.row}>
              <TouchableOpacity onPress={setAudio}>
                <Image
                  style={styles.checkbox}
                  source={!isAudio ? Images.grayUncheck : Images.grayCheck}
                />
              </TouchableOpacity>

              <Text style={styles.text}>Z-audio</Text>

              <TouchableOpacity onPress={setCurtain}>
                <Image
                  style={styles.checkbox}
                  source={!isCurtain ? Images.grayUncheck : Images.grayCheck}
                />
              </TouchableOpacity>

              <Text style={styles.text}>Curtain</Text>
            </View>

            <View style={styles.row}>
              <TouchableOpacity onPress={setIrrigation}>
                <Image
                  style={styles.checkbox}
                  source={!isIrrigation ? Images.grayUncheck : Images.grayCheck}
                />
              </TouchableOpacity>

              <Text style={styles.text}>Irrigation</Text>

              <TouchableOpacity onPress={setDmx}>
                <Image
                  style={styles.checkbox}
                  source={!isDmx ? Images.grayUncheck : Images.grayCheck}
                />
              </TouchableOpacity>

              <View>
                <Text style={styles.text}>DMX</Text>
              </View>
            </View>

            <View style={styles.row}>
              <TouchableOpacity onPress={setRgbw}>
                <Image
                  style={styles.checkbox}
                  source={!isRgbw ? Images.grayUncheck : Images.grayCheck}
                />
              </TouchableOpacity>

              <Text style={styles.text}>RGBW</Text>

              <TouchableOpacity onPress={setCamera}>
                <Image
                  style={styles.checkbox}
                  source={!isCamera ? Images.grayUncheck : Images.grayCheck}
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

                <Modal
                  transparent={true}
                  animationType="slide"
                  visible={modalVisible}
                  onRequestClose={() => {
                    setModalVisible(!modalVisible);
                  }}>
                  <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                      <View>
                        <View style={styles.edit}>
                          <Text>1. One device should be chosen atleast </Text>
                        </View>
                        <View style={styles.edit}>
                          <Text>2. Mood Name cannot be empty</Text>
                        </View>
                        <View style={styles.edit}>
                          <Text>3. Mood Name must be unique</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </Modal>

                <Button
                  buttonText={'Record Mood'}
                  onPress={() => setModalVisible(true)}
                />
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};
export default MoodSetting;
