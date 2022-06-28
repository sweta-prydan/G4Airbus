import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  TouchableHighlight,
  KeyboardAvoidingView,
} from 'react-native';

//images
import Images from '../../utils/images';

//style
import styles from './style';

//color
import Colors from '../../constants/color';

//Component
import Button from '../../components/Button';

const SecurityScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={Images.background} style={styles.image}>
        <SafeAreaView>
          <ScrollView>
            <View style={styles.menuView}>
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack(null);
                }}>
                <Image source={Images.back} style={styles.icon} />
              </TouchableOpacity>
              <Text style={styles.header}>Security</Text>

              <View style={styles.menuView}>
                <Image source={Images.setting} style={styles.icon} />
              </View>
            </View>

            <View style={styles.separator} />
            <View style={styles.main}>
              <View>
                <Image source={Images.lock} style={styles.icon} />
              </View>

              <View style={styles.button}>
                <Button buttonText={'TEST 1'} />
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('AlaramVCScreen')}>
                <View>
                  <Image source={Images.buzzer} style={styles.icon} />
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.main}>
              <TouchableHighlight activeOpacity={0.6} onPress={() => ''}>
                <View style={styles.layer}>
                  underlayColor={Colors.transform}
                  <Image source={Images.vacation} style={styles.symbol} />
                  <Text style={styles.text}>Vacation</Text>
                </View>
              </TouchableHighlight>

              <TouchableHighlight
                activeOpacity={0.6}
                onPress={() => ''}
                underlayColor={Colors.transform}>
                <View style={styles.layer2}>
                  <Image source={Images.away} style={styles.symbol} />

                  <Text style={styles.text2}>Away</Text>
                </View>
              </TouchableHighlight>
            </View>

            <View style={styles.main}>
              <TouchableHighlight
                activeOpacity={0.6}
                onPress={() => ''}
                underlayColor={Colors.transform}>
                <View style={styles.layer}>
                  <Image source={Images.night} style={styles.symbol} />

                  <Text style={styles.text}>Night</Text>
                </View>
              </TouchableHighlight>

              <TouchableHighlight
                activeOpacity={0.6}
                onPress={() => ''}
                underlayColor={Colors.transform}>
                <View style={styles.layer2}>
                  <Image source={Images.guest} style={styles.symbol} />

                  <Text style={styles.text2}>Night With Guest</Text>
                </View>
              </TouchableHighlight>
            </View>

            <View style={styles.main}>
              <TouchableHighlight
                activeOpacity={0.6}
                onPress={() => ''}
                underlayColor={Colors.transform}>
                <View style={styles.layer}>
                  <Image source={Images.day} style={styles.symbol} />

                  <Text style={styles.text}>Day</Text>
                </View>
              </TouchableHighlight>

              <TouchableHighlight
                activeOpacity={0.6}
                onPress={() => ''}
                underlayColor={Colors.transform}>
                <View style={styles.layer2}>
                  <Image source={Images.alarm} style={styles.symbol} />

                  <Text style={styles.text2}>Alarm</Text>
                </View>
              </TouchableHighlight>
            </View>

            <View style={styles.main}>
              <View>
                <Text style={styles.description}> Password </Text>
              </View>

              <View style={styles.edit}>
                <KeyboardAvoidingView
                  behavior="padding"
                  style={styles.container}
                  enabled>
                  <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor={Colors.gray}
                    keyboardType="visible-password"
                  />
                </KeyboardAvoidingView>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};
export default SecurityScreen;
