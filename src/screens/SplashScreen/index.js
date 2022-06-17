import React, { useState, useEffect } from 'react';
import { Image, View } from 'react-native';

//style
import styles from './style';

// Images
import Images from '../../utils/images';

//colors
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = props => {
  const [authLoaded, setAuthLoaded] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAuthLoaded(false);
      AsyncStorage.getItem('user_id').then(value =>
        props.navigation.replace(
          value === null ? 'AuthNavigator' : 'LoginScreen'
        )
      );
    }, 2000);
  }, [props.navigation]);

  return (
    <View style={styles.container}>
      <Image source={Images.splash} style={styles.splashLogo} />
    </View>
  );
};
export default SplashScreen;
