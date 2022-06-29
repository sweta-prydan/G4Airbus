import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  ImageBackground,
} from 'react-native';

//images
import Images from '../../../../utils/images';

//Components
import { Button, CentralHeader, Input } from '../../../../components';

//style
import styles from './style';

const DMXSetting = ({ navigation }) => {
  const [Title, onChangeTitle] = React.useState();
  const [lightType, onChangeLightType] = React.useState();
  const [subnet, onChangeSubnet] = React.useState(null);
  const [Channel, onChangeChannel] = React.useState(null);

  return (
    <View style={styles.container}>
      <ImageBackground source={Images.background} style={styles.image}>
        <View>
          <CentralHeader
            headerText={'DMX Setting'}
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
                text={'   Title        '}
                value={Title}
                onChange={onChangeTitle}
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
              <View style={styles.childView}>
                <Text style={styles.text}>Channel List</Text>
              </View>
              <Button buttonText={'Add Channel'} />
              <Image source={Images.close} style={styles.icon} />
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};
export default DMXSetting;
