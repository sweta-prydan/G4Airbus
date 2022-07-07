import React, { useState } from 'react';
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
import { CentralHeader, Input } from '../../../../components';

//style
import styles from './style';

const LightSetting = ({ navigation }) => {
  const [deviceName, onChangedeviceName] = React.useState();
  const [lightType, onChangeLightType] = React.useState();
  const [subnet, onChangeSubnet] = React.useState();
  const [device, onChangeDevice] = React.useState();
  const [Channel, onChangeChannel] = React.useState();

  const [flag, setFlag] = React.useState(true);
  const [isSelected, setIsSelected] = useState(false);
  const toggleSwitch = () => setFlag(previousState => !previousState);

  return (
    <View style={styles.container}>
      <ImageBackground source={Images.background} style={styles.image}>
        <View>
          <CentralHeader
            headerText={'        Light Setting      '}
            navigation={() => {
              navigation.goBack(null);
            }}
            onPress={() => navigation.navigate('StarScreen')}
          />
        </View>

        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.container}>
            <View>
              <View style={styles.separator} />

              <Input
                value={deviceName}
                text={'Device Name'}
                onChange={onChangedeviceName}
              />

              <Input
                value={lightType}
                text={' Light Type   '}
                onChange={onChangeLightType}
              />

              <Input
                value={subnet}
                text={'   Subnet Id:   '}
                onChange={onChangeSubnet}
              />

              <Input
                value={device}
                text={' Device Id:     '}
                onChange={onChangeDevice}
              />

              <Input
                value={Channel}
                text={'Add Channel '}
                onChange={onChangeChannel}
              />

              <View style={styles.main}>
                <Text style={styles.text}>Select Icon</Text>

                <View>
                  <TouchableOpacity onPress={() => toggleSwitch()}>
                    <Image
                      style={styles.icon}
                      source={flag ? Images.logo : Images.camera}
                    />
                  </TouchableOpacity>
                  <Text style={styles.title}>OffState</Text>
                </View>

                <View>
                  <Image
                    style={styles.icon}
                    source={flag ? Images.logo : Images.gallery}
                  />
                  <Text style={styles.title}>OnState</Text>
                </View>
              </View>

              <View style={styles.row1}>
                <View>
                  <Text style={styles.allow}>Allow Control Main Screen</Text>
                </View>
                <TouchableOpacity onPress={() => setIsSelected(!isSelected)}>
                  <Image
                    style={styles.checkbox}
                    source={isSelected ? Images.select : Images.unselect}
                  />
                </TouchableOpacity>
              </View>

              <Image source={Images.close} style={styles.icon} />
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};
export default LightSetting;
