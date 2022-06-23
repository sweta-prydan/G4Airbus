import React, { useState } from 'react';
import {
  View,
  Alert,
  Modal,
  Image,
  ScrollView,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

//images
import Images from '../../utils/images';

//Components
import {
  Header,
  Button,
  PowerOn,
  PowerOff,
  CentralControl,
} from '../../components';

//style
import styles from './style';

import { ColorPicker } from 'react-native-color-picker';

const RGBWScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <ImageBackground source={Images.background} style={styles.image}>
        <Header navigation={navigation} headerText="Central Control" />

        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.container}>
            <View style={styles.separator} />

            <CentralControl />

            <View style={styles.main}>
              <PowerOn />
              <PowerOff />
            </View>

            <View style={styles.centeredView}>
              <Modal
                transparent={true}
                animationType="slide"
                visible={modalVisible}
                onRequestClose={() => {
                  Alert.alert('Modal has been closed.');
                  setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <View style={styles.close}>
                      <TouchableOpacity
                        onPress={() => setModalVisible(!modalVisible)}>
                        <Image source={Images.close} style={styles.cancel} />
                      </TouchableOpacity>
                    </View>

                    <View style={styles.container1}>
                      <ColorPicker
                        onColorSelected={color =>
                          alert(`Color selected: ${color}`)
                        }
                        style={styles.colorpiker}
                      />

                      <View style={styles.button}>
                        <Button
                          buttonText={'Done'}
                          onPress={() => setModalVisible(!modalVisible)}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </Modal>

              <View style={styles.button}>
                <Button
                  buttonText={'select color'}
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
export default RGBWScreen;
