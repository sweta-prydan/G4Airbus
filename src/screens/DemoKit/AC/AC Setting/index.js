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
  { label: 'AC', value: '1' },
  { label: 'HVAC', value: '2' },
  { label: 'AC With IR', value: '3' },
];

const ACSetting = ({ navigation }) => {
  const [deviceName, onChangedeviceName] = React.useState();
  const [lightType, onChangeLightType] = React.useState();
  const [subnet, onChangeSubnet] = React.useState(null);
  const [Channel, onChangeChannel] = React.useState(null);
  const [value, setValue] = useState(null);

  return (
    <View style={styles.container}>
      <ImageBackground source={Images.background} style={styles.image}>
        <View>
          <CentralHeader
            headerText={'AC Setting'}
            onPress={() => navigation.navigate('StarScreen')}
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
                text={'AC Name: '}
                value={deviceName}
                onChange={onChangedeviceName}
              />

              <Input
                text={' Subnet Id:'}
                value={lightType}
                onChange={onChangeLightType}
              />

              <Input
                text={' Device Id: '}
                value={subnet}
                onChange={onChangeSubnet}
              />

              <Input text={'AC TypeID:'} />
              <Dropdown
                search
                data={data}
                value={value}
                maxHeight={200}
                placeholder="AC"
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
              <Input
                value={Channel}
                text={'AC SyncNo:'}
                onChange={onChangeChannel}
              />

              <Image source={Images.close} style={styles.icon} />
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};
export default ACSetting;
