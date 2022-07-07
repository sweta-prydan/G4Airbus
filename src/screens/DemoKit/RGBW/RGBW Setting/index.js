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

const CameraSetting = ({ navigation }) => {
  const [title, onChangeTitle] = useState();
  const [device, onChangeDevice] = useState();
  const [subnet, onChangeSubnet] = useState(null);

  return (
    <View style={styles.container}>
      <ImageBackground source={Images.background} style={styles.image}>
        <View>
          <CentralHeader
            headerText={'     Camera Setting      '}
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
                value={title}
                text={'     Title     '}
                onChange={onChangeTitle}
              />
              <Input
                value={subnet}
                text={'Subnet Id:'}
                onChange={onChangeSubnet}
              />

              <Input
                value={device}
                text={'Device Id:'}
                onChange={onChangeDevice}
              />

              <Image source={Images.close} style={styles.icon} />
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};
export default CameraSetting;
