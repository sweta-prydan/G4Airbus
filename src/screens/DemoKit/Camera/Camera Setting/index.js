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
  const [user, onChangeUser] = useState();
  const [port, onChangePort] = useState();
  const [password, onChangePassword] = useState();
  const [url, onChangeUrl] = useState('http://');

  return (
    <View style={styles.container}>
      <ImageBackground source={Images.background} style={styles.image}>
        <View>
          <CentralHeader
            headerText={'    Camera Setting    '}
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
                text={' Title        '}
                onChange={onChangeTitle}
              />
              <Input value={url} text={' Web URL: '} onChange={onChangeUrl} />

              <Input value={user} text={'User Name'} onChange={onChangeUser} />

              <Input
                value={password}
                text={'Password    '}
                onChange={onChangePassword}
              />

              <Input
                value={port}
                text={' Port:          '}
                onChange={onChangePort}
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
