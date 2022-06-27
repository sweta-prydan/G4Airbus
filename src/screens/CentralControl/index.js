import React from 'react';
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
import Images from '../../utils/images';

//style
import styles from './style';

//Component
import Layer from '../../components/ShortLayer';
import { CentralHeader } from '../../components';

const CentralControlScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={Images.background} style={styles.image}>
        <SafeAreaView>
          <ScrollView>
            <CentralHeader
              onPress={() => navigation.navigate('HomeScreen')}
              headerText="Central Control"
            />
            <View style={styles.separate} />

            <View style={styles.main}>
              <Layer
                Icon={Images.roomLight}
                layerText={'Light'}
                onPress={() => navigation.navigate('LightScreen')}
              />

              <Layer
                Icon={Images.audio}
                layerText={'Music'}
                onPress={() => navigation.navigate('MusicScreen')}
              />
            </View>

            <View style={styles.main}>
              <Layer
                Icon={Images.hvac}
                layerText={'HVAC'}
                onPress={() => navigation.navigate('HVACScreen')}
              />

              <Layer
                Icon={Images.curtain}
                layerText={'Curtain'}
                onPress={() => navigation.navigate('CurtainScreen')}
              />
            </View>

            <View style={styles.main}>
              <Layer
                Icon={Images.fan}
                layerText={'Fan'}
                onPress={() => navigation.navigate('FanScreen')}
              />

              <Layer
                Icon={Images.irrigation}
                layerText={'Irrigation'}
                onPress={() => navigation.navigate('IrrigationScreen')}
              />
            </View>

            <View style={styles.main}>
              <Layer
                Icon={Images.dmx}
                layerText={'DMX'}
                onPress={() => navigation.navigate('DMXScreen')}
              />

              <Layer
                Icon={Images.rgb}
                layerText={'RGBW'}
                onPress={() => navigation.navigate('RGBWScreen')}
              />
            </View>

            <View style={styles.main}>
              <Layer
                Icon={Images.security}
                layerText={'Security'}
                onPress={() => navigation.navigate('SecurityScreen')}
              />

              <Layer
                Icon={Images.schedule}
                layerText={'Scheduling'}
                onPress={() => navigation.navigate('SchedulingScreen')}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default CentralControlScreen;
