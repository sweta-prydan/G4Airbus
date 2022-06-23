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

const ForgetScreen = ({ navigation }) => {
  const [userEmail, setUserEmail] = useState('');
  const [errortext, setErrortext] = useState('');

  const handleSubmitPress = () => {
    setErrortext('');
    if (!userEmail) {
      Alert.alert('Error', 'Please fill Email');
    }
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={Images.background} style={styles.image}>
        <SafeAreaView>
          <ScrollView>
            <Logo Heading={'Forget Password'} />

            <View style={styles.childView}>
              <View style={styles.SectionStyle}>
                <View style={styles.input}>
                  <Text style={styles.registerTextStyle}>Email:</Text>

                  <TextInput
                    style={styles.inputStyle}
                    onChangeText={UserEmail => setUserEmail(UserEmail)}
                    placeholder="Enter Email"
                    placeholderTextColor={Colors.black}
                    autoCapitalize="none"
                    keyboardType="email-address"
                    returnKeyType="next"
                    blurOnSubmit={false}
                  />
                </View>
              </View>

              <View style={styles.buttonStyle}>
                <Button
                  buttonText={'Submit'}
                  onPress={() => navigation.navigate('LoginScreen')}
                />
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default ForgetScreen;
