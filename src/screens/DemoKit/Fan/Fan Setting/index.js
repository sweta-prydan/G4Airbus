import React, { useState } from 'react';
import {
  View,
  Image,
  ScrollView,
  SafeAreaView,
  ImageBackground,
} from 'react-native';

//images
import Images from '../../../../utils/images';

//Components
import { CentralHeader, Input } from '../../../../components';

//style
import styles from './style';

import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';

const data = [
  { label: '1', value: '1' },
  { label: '2', value: '2' },
  { label: '3', value: '3' },
  { label: '4', value: '4' },
];

const data2 = [
  { label: '3', value: '1' },
  { label: '5', value: '2' },
];

const FanSetting = ({ navigation }) => {
  const [value, setValue] = useState(null);
  const [deviceName, onChangedeviceName] = useState();
  const [lightType, onChangeLightType] = useState();
  const [subnet, onChangeSubnet] = useState(null);
  const [Channel, onChangeChannel] = useState(null);

  return (
    <View style={styles.container}>
      <ImageBackground source={Images.background} style={styles.image}>
        <View>
          <CentralHeader
            headerText={' Fan Setting '}
            navigation={() => {
              navigation.goBack(null);
            }}
          />
        </View>

        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.container}>
            <View>
              <View style={styles.separator} />

              <Input
                value={deviceName}
                text={'Device Name:'}
                onChange={onChangedeviceName}
              />
              <Dropdown
                search
                data={data}
                value={value}
                maxHeight={200}
                valueField="value"
                labelField="label"
                placeholder="Fan Type"
                searchPlaceholder="Search..."
                onChange={item => {
                  setValue(item.value);
                }}
                style={styles.dropdown}
                iconStyle={styles.iconStyle}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                renderLeftIcon={() => <AntDesign style={styles.icon2} />}
              />
              <Input
                value={lightType}
                text={' Subnet Id:'}
                onChange={onChangeLightType}
              />

              <Input
                value={subnet}
                text={' Device Id: '}
                onChange={onChangeSubnet}
              />

              <Input
                value={Channel}
                text={'Add Channel'}
                onChange={onChangeChannel}
              />

              <Dropdown
                search
                data={data2}
                value={value}
                maxHeight={200}
                placeholder="Gear"
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
                renderLeftIcon={() => <AntDesign style={styles.icon2} />}
              />
              <Image source={Images.close} style={styles.icon} />
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};
export default FanSetting;
