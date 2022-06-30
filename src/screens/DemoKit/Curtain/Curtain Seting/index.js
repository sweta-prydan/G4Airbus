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
import { Button, CentralHeader, Input } from '../../../../components';

//style
import styles from './style';

const CurtainSetting = ({ navigation }) => {
  const [deviceName, onChangedeviceName] = React.useState();
  const [shadeType, onChangeShadeType] = React.useState();
  const [manage, onChangeManage] = React.useState();

  const [flag, setFlag] = React.useState(true);
  const [isRotate, setIsRotate] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const toggleSwitch = () => setFlag(previousState => !previousState);

  return (
    <View style={styles.container}>
      <ImageBackground source={Images.background} style={styles.image}>
        <CentralHeader
          headerText={'Curtain Setting'}
          navigation={() => {
            navigation.goBack(null);
          }}
          onPress={() => navigation.navigate('StarScreen')}
        />

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
                value={shadeType}
                text={' Shade Type:   '}
                onChange={onChangeShadeType}
              />

              <Input
                value={manage}
                text={' Managed by  '}
                onChange={onChangeManage}
              />

              <View style={styles.main}>
                <View style={styles.main}>
                  <TouchableOpacity onPress={() => setIsRotate(!isRotate)}>
                    <Image
                      style={styles.checkbox}
                      source={isRotate ? Images.select : Images.unselect}
                    />
                  </TouchableOpacity>

                  <Text style={styles.allow}>Has Stop</Text>
                </View>

                <View style={styles.main}>
                  <TouchableOpacity onPress={() => setIsSelected(!isSelected)}>
                    <Image
                      style={styles.checkbox}
                      source={isSelected ? Images.select : Images.unselect}
                    />
                  </TouchableOpacity>

                  <Text style={styles.allow}>Has Rotate</Text>
                </View>
              </View>

              <View style={styles.main}>
                <View style={styles.row1}>
                  <Text style={styles.allow}>On Icon</Text>

                  <TouchableOpacity onPress={() => toggleSwitch()}>
                    <Image
                      style={styles.icon}
                      source={flag ? Images.logo : Images.camera}
                    />
                  </TouchableOpacity>
                </View>

                <View style={styles.row1}>
                  <Text style={styles.allow}>Off Icon</Text>

                  <Image
                    style={styles.icon}
                    source={flag ? Images.logo : Images.gallery}
                  />
                </View>
              </View>

              <View style={styles.main}>
                <View style={styles.button}>
                  <Button buttonText={'Open'} />
                </View>
                <View style={styles.button}>
                  <Button buttonText={'Close'} />
                </View>
              </View>

              <Image source={Images.close} style={styles.icon} />
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};
export default CurtainSetting;
