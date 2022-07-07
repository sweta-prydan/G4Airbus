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
  { label: 'Everyday', value: '1' },
  { label: 'Sunday', value: '2' },
  { label: 'Monday ', value: '3' },
  { label: 'Tuesday ', value: '4' },
  { label: 'Wednesday', value: '5' },
  { label: 'Thursday', value: '6' },
  { label: 'Friday', value: '7' },
  { label: 'Saturday', value: '8' },
];

const IrrigationSetting = ({ navigation }) => {
  const [value, setValue] = useState(null);
  const [subnet, onChangeSubnet] = useState();
  const [device, onChangeDevice] = useState();
  const [channel, onChangeChannel] = useState();
  const [endTime, onChangeEndTime] = useState();
  const [startTime, onChangeStartTime] = useState();
  const [deviceName, onChangedeviceName] = useState();
  const [shouldShow, setShouldShow] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const modal = () => setShouldShow(previousState => !previousState);
  const image = () => setIsSelected(previousState => !previousState);

  return (
    <View style={styles.container}>
      <ImageBackground source={Images.background} style={styles.image}>
        <View>
          <CentralHeader
            headerText={'  Irrigation Setting  '}
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
                value={subnet}
                text={'  Subnet Id:  '}
                onChange={onChangeSubnet}
              />

              <Input
                value={device}
                text={' Device Id:   '}
                onChange={onChangeDevice}
              />

              <Input
                value={channel}
                text={'Channel Id:'}
                onChange={onChangeChannel}
              />
              <Input
                value={startTime}
                text={'Start Time  '}
                onChange={onChangeStartTime}
              />

              <Input
                value={endTime}
                text={' End Time    '}
                onChange={onChangeEndTime}
              />
              <View style={styles.row1}>
                <View>
                  <Text style={styles.allow}>Is Automatic</Text>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    setIsSelected(!isSelected);
                    setShouldShow(true);
                  }}
                  onValueChange={(image, modal)}>
                  <Image
                    style={styles.checkbox}
                    source={isSelected ? Images.select : Images.unselect}
                  />
                </TouchableOpacity>
              </View>
              {shouldShow ? (
                <Dropdown
                  search
                  data={data}
                  value={value}
                  maxHeight={300}
                  valueField="value"
                  labelField="label"
                  placeholder="Day of Week"
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
              ) : null}
              <Image source={Images.close} style={styles.icon} />
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};
export default IrrigationSetting;
