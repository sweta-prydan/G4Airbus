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
import Images from '../../../utils/images';

// Components
import Header from '../../../components/Header';
import Button from '../../../components/Button/index';

//style
import styles from './style';

import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';

const data = [
  { label: 'Select Zone', value: '1' },
  { label: 'DEMO KIT Zone', value: '2' },
];

const SchedulingDropScreen = ({ navigation }) => {
  const [value, setValue] = useState(null);
  const [isSelected, setIsSelected] = useState(false);

  return (
    <View style={styles.container}>
      <ImageBackground source={Images.background} style={styles.image}>
        <Header navigation={navigation} headerText="Scheduling1" />
        <SafeAreaView>
          <ScrollView>
            <View style={styles.container}>
              <View>
                <Text style={[styles.data, styles.border]}>Schedule Name</Text>

                <Dropdown
                  search
                  data={data}
                  value={value}
                  maxHeight={200}
                  labelField="label"
                  valueField="value"
                  placeholder="Select Zone"
                  onChange={item => {
                    setValue(item.value);
                  }}
                  style={styles.dropdown}
                  iconStyle={styles.iconStyle}
                  searchPlaceholder="Search..."
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  renderLeftIcon={() => <AntDesign style={styles.icon} />}
                />
              </View>

              <View>
                <Dropdown
                  search
                  value={value}
                  maxHeight={150}
                  labelField="label"
                  valueField="value"
                  style={styles.dropdown}
                  placeholder="Controlled Item"
                  searchPlaceholder="Search..."
                  iconStyle={styles.iconStyle}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  renderLeftIcon={() => (
                    <AntDesign color="white" style={styles.icon} />
                  )}
                />
              </View>

              <View style={styles.main}>
                <View style={styles.row}>
                  <View>
                    <Text style={styles.data}>One</Text>
                  </View>

                  <View>
                    <Button buttonText={'Select Date'} />
                  </View>

                  <View>
                    <Button buttonText={'Select Time'} />
                  </View>
                </View>

                <View style={styles.row1}>
                  <TouchableOpacity onPress={() => setIsSelected(!isSelected)}>
                    <Image
                      style={styles.checkbox}
                      source={isSelected ? Images.select : Images.unselect}
                    />
                  </TouchableOpacity>

                  <View>
                    <Text style={styles.data}>Alarm Clock Bell</Text>
                  </View>

                  <View style={styles.button1}>
                    <Button buttonText="save" />
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};
export default SchedulingDropScreen;
