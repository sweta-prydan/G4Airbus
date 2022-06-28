import React, { useState } from 'react';
import {
  View,
  Text,
  Alert,
  TextInput,
  ScrollView,
  SafeAreaView,
  ImageBackground,
} from 'react-native';

//style
import styles from './style';

//colors
import { Colors } from '../../constants';

// Images
import Images from '../../utils/images';

//components
import { Button, Logo } from '../../components';

const LoginScreen = ({ navigation }) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [errortext, setErrortext] = useState('');

  const handleSubmitPress = () => {
    setErrortext('');
    if (!userEmail) {
      Alert.alert('Error', 'Please fill Email');
    }
    if (!userPassword) {
      Alert.alert('Error', 'Please fill Password');
    }
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={Images.background} style={styles.image}>
        <SafeAreaView>
          <ScrollView>
            <Logo Heading={'Login'} />

            <View style={styles.childView}>
              <View style={styles.SectionStyle}>
                <View style={styles.input}>
                  <Text style={styles.registerTextStyle}>Email:</Text>
                  <TextInput
                    blurOnSubmit={false}
                    autoCapitalize="none"
                    style={styles.inputStyle}
                    placeholder=" Enter Email "
                    keyboardType="email-address"
                    placeholderTextColor={Colors.gray}
                    onChangeText={UserEmail => setUserEmail(UserEmail)}
                  />
                </View>
              </View>

              <View style={styles.SectionStyle}>
                <View style={styles.input}>
                  <Text style={styles.registerTextStyle}>Password:</Text>
                  <TextInput
                    blurOnSubmit={false}
                    secureTextEntry={true}
                    style={styles.inputStyle}
                    placeholder="Enter Password"
                    placeholderTextColor={Colors.gray}
                    onChangeText={UserPassword => setUserPassword(UserPassword)}
                  />
                </View>
              </View>

              <Text style={styles.errorTextStyle}>{errortext}</Text>
              <View style={styles.buttonStyle}>
                <Button
                  buttonText={'Login'}
                  onPress={() => navigation.navigate('HomeScreen')}
                />
              </View>

              <Text
                style={styles.registerTextStyle}
                onPress={() => navigation.navigate('ForgetScreen')}>
                Forget Password
              </Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;
