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
  KeyboardAvoidingView,
} from 'react-native';

//images
import Images from '../../../../utils/images';

//Components
import { CentralHeader } from '../../../../components';

//style
import styles from './style';

const LightSetting = ({ navigation }) => {
  const [deviceName, onChangedeviceName] = React.useState();
  const [lightType, onChangeLightType] = React.useState();
  const [subnet, onChangeSubnet] = React.useState(null);
  const [device, onChangeDevice] = React.useState(null);
  const [Channel, onChangeChannel] = React.useState(null);
  const [flag, setFlag] = React.useState(true);
  const toggleSwitch = () => setFlag(previousState => !previousState);

  return (
    <View style={styles.container}>
      <ImageBackground source={Images.background} style={styles.image}>
        <View>
          <CentralHeader headerText={'Light Setting'} />
        </View>

        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.container}>
            <View>
              <View style={styles.separator} />
              <View>
                <KeyboardAvoidingView behavior="padding" enabled>
                  <View style={styles.main}>
                    <Text style={styles.text}>Device Name:</Text>
                    <TextInput
                      value={deviceName}
                      style={styles.input}
                      onChangedeviceName={onChangedeviceName}
                      keyboardType="name-phone-pad"
                    />
                  </View>
                </KeyboardAvoidingView>

                <KeyboardAvoidingView behavior="padding" enabled>
                  <View style={styles.main}>
                    <Text style={styles.text2}>Light Type </Text>
                    <TextInput
                      value={lightType}
                      style={styles.input}
                      keyboardType="name-phone-pad"
                      onChangeLightType={onChangeLightType}
                    />
                  </View>
                </KeyboardAvoidingView>

                <KeyboardAvoidingView behavior="padding" enabled>
                  <View style={styles.main}>
                    <Text style={styles.text2}>Subnet Id: </Text>
                    <TextInput
                      value={subnet}
                      style={styles.input}
                      keyboardType="phone-pad"
                      onChangeSubnet={onChangeSubnet}
                    />
                  </View>
                </KeyboardAvoidingView>

                <KeyboardAvoidingView behavior="padding" enabled>
                  <View style={styles.main}>
                    <Text style={styles.text2}>Device Id: </Text>
                    <TextInput
                      value={device}
                      style={styles.input}
                      keyboardType="phone-pad"
                      onChangeDevice={onChangeDevice}
                    />
                  </View>
                </KeyboardAvoidingView>

                <KeyboardAvoidingView behavior="padding" enabled>
                  <View style={styles.main}>
                    <Text style={styles.text}>Add Channel </Text>
                    <TextInput
                      value={Channel}
                      style={styles.input}
                      keyboardType="name-phone-pad"
                      onChangeChannel={onChangeChannel}
                    />
                  </View>
                </KeyboardAvoidingView>

                <KeyboardAvoidingView behavior="padding" enabled>
                  <View style={styles.main}>
                    <Text style={styles.text}>Select Icon</Text>
                    <View>
                      <TouchableOpacity onPress={() => toggleSwitch()}>
                        <Image
                          source={flag ? Images.logo : Images.camera}
                          style={styles.icon}
                        />
                      </TouchableOpacity>
                      <Text style={styles.title}>OffSate</Text>
                    </View>
                    <View>
                      <Image
                        source={flag ? Images.logo : Images.gallery}
                        style={styles.icon}
                      />
                      <Text style={styles.title}>OnSate</Text>
                    </View>
                  </View>
                </KeyboardAvoidingView>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};
export default LightSetting;
