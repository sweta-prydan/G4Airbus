import React, { useState } from 'react';

import {
  View,
  Text,
  Image,
  Modal,
  TextInput,
  ScrollView,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

//images
import Images from '../../utils/images';
import { Colors } from '../../constants';

//Components
import Card from '../../components/Card';
import Button from '../../components/Button';

//style
import styles from './style';

// import Camera from 'react';

const HomeScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [text, onChangeText] = React.useState();
  const [number, onChangeNumber] = React.useState(null);

  return (
    <View style={styles.container}>
      <ImageBackground source={Images.background} style={styles.image}>
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.container}>
            <View style={{ flex: 1 }}>
              <View style={styles.header}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('SettingScreen')}>
                  <Image source={Images.setting} style={styles.icon} />
                </TouchableOpacity>

                <Text style={styles.text}>Select Area</Text>

                <View>
                  <Modal
                    transparent={true}
                    animationType="slide"
                    visible={modalVisible}
                    onRequestClose={() => {
                      setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.centeredView}>
                      <View style={styles.modalView}>
                        <View style={styles.close}>
                          <TouchableOpacity
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Image
                              source={Images.close}
                              style={styles.cancel}
                            />
                          </TouchableOpacity>
                        </View>

                        <View>
                          <KeyboardAvoidingView behavior="padding" enabled>
                            <View style={styles.edit}>
                              <TextInput
                                value={text}
                                style={styles.input}
                                onChangeText={onChangeText}
                                keyboardType="name-phone-pad"
                                placeholderTextColor={Colors.spanishGray}
                                placeholder="Enter The MainZone Name"
                              />
                            </View>
                          </KeyboardAvoidingView>

                          <KeyboardAvoidingView behavior="padding" enabled>
                            <View style={styles.edit}>
                              <TextInput
                                value={number}
                                style={styles.input}
                                keyboardType="phone-pad"
                                placeholderTextColor={Colors.spanishGray}
                                placeholder="Enter IP Address"
                                onChangeText={onChangeNumber}
                              />
                            </View>
                          </KeyboardAvoidingView>
                        </View>

                        <Image source={Images.loading} style={styles.loading} />

                        <Text style={styles.font}>Choose Image</Text>

                        <View style={styles.locate}>
                          <View>
                            <Text style={styles.location}>Lat: 0.0</Text>

                            <Text style={styles.location}>Long: 0.0</Text>

                            <Text style={styles.location}>Radius: 0.0</Text>
                          </View>

                          <View>
                            <Image
                              style={styles.icon}
                              source={Images.location}
                            />
                          </View>
                        </View>

                        <View style={styles.camera}>
                          <View>
                            <Image
                              style={styles.photo}
                              source={Images.gallery}
                            />

                            <Text style={styles.font}>Gallery</Text>
                          </View>

                          <View>
                            <TouchableOpacity
                              onPress={() =>
                                navigation.navigate('SettingScreen')
                              }>
                              <Image
                                style={styles.photo}
                                source={Images.camera}
                              />
                            </TouchableOpacity>

                            <Text style={styles.font}>Camera</Text>
                          </View>
                        </View>

                        <View style={styles.layout}>
                          <View style={styles.button}>
                            <Button
                              style={styles.button}
                              buttonText="Save"
                              onPress={() =>
                                navigation.navigate('LanguageSettingScreen')
                              }
                            />
                          </View>

                          <View style={styles.button}>
                            <Button
                              style={styles.button}
                              buttonText="Delete"
                              onPress={() =>
                                navigation.navigate('SettingScreen')
                              }
                            />
                          </View>
                        </View>
                      </View>
                    </View>
                  </Modal>

                  <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <Image source={Images.plus} style={styles.icon} />
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                <Card
                  layerText={'DemoArea'}
                  Banner={Images.smartbuilding}
                  onPress={() => navigation.navigate('StarScreen')}
                />
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};
export default HomeScreen;
