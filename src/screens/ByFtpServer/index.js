import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  SafeAreaView,
  ImageBackground,
  KeyboardAvoidingView,
} from 'react-native';

//style
import styles from './style';

//images
import Images from '../../utils/images';
import { Colors } from '../../constants';

// Components
import Header from '../../components/Header';
import Button from '../../components/Button/index';

const ByFtpServerScreen = ({ navigation }) => {
  const [Username, onChangeUsername] = useState({ value: '' });
  const [password, onChangePassword] = useState({ value: '' });

  return (
    <View style={styles.container}>
      <ImageBackground source={Images.background} style={styles.image}>
        <Header navigation={navigation} headerText="FTP Server Setting" />
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.container}>
            <View style={styles.childView}>
              <Text style={styles.title}>FTP Server Setting</Text>

              <View style={styles.container}>
                <View style={styles.main}>
                  <View>
                    <Text style={styles.description}>FTP Server Address</Text>
                  </View>

                  <View style={styles.edit}>
                    <KeyboardAvoidingView
                      behavior="padding"
                      style={styles.container}
                      enabled>
                      <TextInput
                        value=""
                        style={styles.input}
                        keyboardType="phone-pad"
                      />
                    </KeyboardAvoidingView>
                  </View>
                </View>

                <Text style={styles.example}>i.e ftp://192.168.1.20</Text>

                <View style={styles.separator} />

                <View style={styles.main}>
                  <View>
                    <Text style={styles.description}> Username </Text>
                  </View>

                  <View style={styles.edit2}>
                    <KeyboardAvoidingView
                      behavior="padding"
                      style={styles.container}
                      enabled>
                      <TextInput
                        value={Username}
                        style={styles.input}
                        onChange={onChangeUsername}
                        placeholder="Enter User Name"
                        keyboardType="name-phone-pad"
                        placeholderTextColor={Colors.gray}
                      />
                    </KeyboardAvoidingView>
                  </View>
                </View>

                <View style={styles.separator} />

                <View style={styles.main}>
                  <View>
                    <Text style={styles.description}> Password </Text>
                  </View>
                  <View style={styles.edit2}>
                    <KeyboardAvoidingView
                      behavior="padding"
                      style={styles.container}
                      enabled>
                      <TextInput
                        value={password}
                        style={styles.input}
                        placeholder="Password"
                        keyboardType="phone-pad"
                        onChange={onChangePassword}
                        placeholderTextColor={Colors.gray}
                      />
                    </KeyboardAvoidingView>
                  </View>
                </View>
              </View>

              <View style={styles.button}>
                <Button
                  buttonText="Save"
                  onPress={() => navigation.navigate('LanguageSettingScreen')}
                />
              </View>
            </View>

            <View style={styles.separator} />

            <View style={styles.childView2}>
              <Text style={styles.title}>Database Upload</Text>

              <Text style={styles.description}>
                Upload Database from this IPHONE/ IPAD to FTP Server; Database
                Name is : Database.Sqllite3
              </Text>

              <View style={styles.separator} />
              <View style={styles.separator} />

              <View style={styles.button}>
                <Button
                  onPress={() => navigation.navigate('LanguageSettingScreen')}
                  buttonText="Upload"
                />
              </View>
            </View>

            <View style={styles.separator} />

            <View style={styles.childView3}>
              <Text style={styles.title}>Database Download</Text>

              <Text style={styles.description}>
                Download Database from FTP Server to this IPHONE/IPad;The
                database name must be Database.sqlite3, and the directory name
                must be on the root directory of FTP Server.
              </Text>

              <View style={styles.separator} />
              <View style={styles.separator} />

              <View style={styles.button}>
                <Button
                  onPress={() => navigation.navigate('LanguageSettingScreen')}
                  buttonText="Download"
                />
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};
export default ByFtpServerScreen;
