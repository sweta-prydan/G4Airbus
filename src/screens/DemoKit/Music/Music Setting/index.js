import React from 'react';
import { View, ScrollView, SafeAreaView, ImageBackground } from 'react-native';

//images
import Images from '../../../../utils/images';

//Components
import { Button, CentralHeader, Input } from '../../../../components';

//style
import styles from './style';

const MusicSetting = ({ navigation }) => {
  const [subnet, onChangeSubnet] = React.useState();
  const [device, onChangeDevice] = React.useState();

  return (
    <View style={styles.container}>
      <ImageBackground source={Images.background} style={styles.image}>
        <View>
          <CentralHeader
            headerText={'Music Setting'}
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
                value={subnet}
                text={'   Subnet Id:   '}
                onChange={onChangeSubnet}
              />

              <Input
                value={device}
                text={' Device Id:     '}
                onChange={onChangeDevice}
              />
            </View>

            <View style={styles.button}>
              <Button buttonText={'Update'} />
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};
export default MusicSetting;
