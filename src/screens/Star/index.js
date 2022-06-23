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

//style
import styles from './style';

//images
import Images from '../../utils/images';

//Component
import Button from '../../components/Button';

//color
import { Colors } from '../../constants';

const StarScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const [text, onChangeText] = React.useState();

  return (
    <View style={styles.container}>
      <ImageBackground source={Images.background} style={styles.image}>
        <SafeAreaView>
          <ScrollView>
            <View style={styles.menuView}>
              <TouchableOpacity
                onPress={() => navigation.navigate('GlobalNetworkScreen')}>
                <Image source={Images.setingmenu} style={styles.icon} />
              </TouchableOpacity>

              <View style={styles.separator} />

              <TouchableOpacity
                onPress={() => navigation.navigate('CentralControlScreen')}>
                <Image source={Images.building} style={styles.icon} />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  navigation.goBack(null);
                }}>
                <Image source={Images.home} style={styles.home} />
              </TouchableOpacity>

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
                        <Image source={Images.close} style={styles.cancel} />
                      </TouchableOpacity>
                    </View>

                    <View>
                      <View style={styles.edit}>
                        <KeyboardAvoidingView
                          style={styles.container}
                          behavior="padding"
                          enabled>
                          <TextInput
                            value={text}
                            style={styles.input}
                            keyboardType="name-phone-pad"
                            placeholderTextColor={Colors.gray}
                            placeholder="Enter The Zone Name"
                            onChangeText={onChangeText}
                          />
                        </KeyboardAvoidingView>
                      </View>
                    </View>

                    <Image source={Images.room} style={styles.loading} />

                    <Text style={styles.font}>Choose Image</Text>

                    <View style={styles.camera}>
                      <View>
                        <Image source={Images.gallery} style={styles.photo} />

                        <Text style={styles.font}>Gallery</Text>
                      </View>

                      <View>
                        <TouchableOpacity
                          onPress={() => navigation.navigate('SettingScreen')}>
                          <Image source={Images.camera} style={styles.photo} />
                        </TouchableOpacity>

                        <Text style={styles.font}>Camera</Text>
                      </View>
                    </View>

                    <View style={styles.layout}>
                      <View style={styles.button}>
                        <Button
                          onPress={() => navigation.navigate('HomeScreen')}
                          buttonText="Save"
                        />
                      </View>

                      <View style={styles.button}>
                        <Button
                          // onPress={() => navigation.navigate('SettingScreen')}
                          buttonText="Delete"
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

            <View>
              <TouchableOpacity onPress={() => setIsEnabled(!isEnabled)}>
                <ImageBackground
                  source={isEnabled ? Images.room : Colors.black}
                  style={styles.room}>
                  <View style={styles.theme}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Demokitzone')}>
                      <Image source={Images.enrance} style={styles.symbol} />
                    </TouchableOpacity>

                    <View>
                      <Image
                        style={styles.symbol}
                        source={isEnabled ? Images.lighton : Images.lightoff}
                      />
                    </View>
                  </View>

                  <View style={styles.heading}>
                    <View style={styles.eye}>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('Demokitzone')}>
                        <Image source={Images.eye} style={styles.eye} />
                      </TouchableOpacity>
                    </View>

                    <View style={styles.Head}>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('Demokitzone')}>
                        <Text style={styles.demo}>DEMO KIT Zone</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            </View>

            <View style={styles.container}>
              <TouchableOpacity
                onPress={() => navigation.navigate('CentralControlScreen')}>
                <Image source={Images.star} style={styles.star} />
              </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};
export default StarScreen;
