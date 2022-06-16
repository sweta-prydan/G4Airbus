import React, { useState, useEffect } from 'react';
import { Image, View } from 'react-native';

//style
import styles from './style';

// Images
import Images from '../../utils/images';

const SplashScreen = props => {
  const [authLoaded, setAuthLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAuthLoaded(true);
    }, 2000);
  }, []);

  useEffect(() => {
    if (authLoaded) {
      props.navigation.replace('HomeScreen');
    }
  }, [authLoaded, props.navigation]);

  return (
    <View style={styles.container}>
      <Image source={Images.splash} style={styles.splashLogo} />
    </View>
  );
};
export default SplashScreen;
