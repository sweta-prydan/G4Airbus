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

//style
import styles from './style';

//images
import Images from '../../../../utils/images';

//Components
import { CentralHeader, Input } from '../../../../components';

//dropdown
import { Dropdown } from 'react-native-element-dropdown';

const data = [
  { label: 'Signal Control', value: '1' },
  { label: 'InterLOck Control', value: '2' },
  { label: 'Logic Control', value: '3' },
];
const OtherSetting = ({ navigation }) => {
  const [flag, setFlag] = useState(true);
  const [value, setValue] = useState(null);
  const [subnet, onChangeSubnet] = useState();
  const [device, onChangeDevice] = useState();
  const [Channel, onChangeChannel] = useState();
  const [deviceName, onChangedeviceName] = useState();
  const toggleSwitch = () => setFlag(previousState => !previousState);

  return (
    <View style={styles.container}>
      <ImageBackground source={Images.background} style={styles.image}>
        <View>
          <CentralHeader
            headerText={'Other Control Setting'}
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
                text={'    Remark:      '}
                onChange={onChangedeviceName}
              />

              <Dropdown
                search
                data={data}
                value={value}
                maxHeight={200}
                placeholder="Type"
                valueField="value"
                labelField="label"
                searchPlaceholder="Search..."
                onChange={item => {
                  setValue(item.value);
                }}
                style={styles.dropdown}
                iconStyle={styles.iconStyle}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
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

              <Image source={Images.close} style={styles.close} />
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};
export default OtherSetting;
