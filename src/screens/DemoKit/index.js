import React from 'react';
import { View, ImageBackground, SafeAreaView, ScrollView } from 'react-native';

//Components
import { DemoHeader, Layer } from '../../components';

//images
import Images from '../../utils/images';

//style
import styles from './style';

const Demokitzone = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={Images.background} style={styles.image}>
        <SafeAreaView>
          <ScrollView>
            <DemoHeader DemoHeaderText={'DEMOKITZone'} />
            <View style={styles.separator} />

            <View style={styles.main}>
              <Layer
                Icon={Images.roomLight}
                layerText={'     Light'}
                onPress={() => navigation.navigate('MyTabs')}
              />

              <Layer
                Icon={Images.rgb}
                layerText={'     RGBW'}
                onPress={() => navigation.navigate('Rgbw')}
              />
            </View>

            <View style={styles.main}>
              <Layer
                Icon={Images.dmx}
                layerText={'     DMX'}
                onPress={() => navigation.navigate('Dmx')}
              />

              <Layer
                Icon={Images.hvac}
                layerText={'       HVAC'}
                onPress={() => navigation.navigate('Ac')}
              />
            </View>

            <View style={styles.main}>
              <Layer
                Icon={Images.audio}
                layerText={'   Z-Audio'}
                onPress={() => navigation.navigate('Music')}
              />

              <Layer
                Icon={Images.curtain}
                layerText={'    Curtain'}
                onPress={() => navigation.navigate('Curtain')}
              />
            </View>

            <View style={styles.main}>
              <Layer
                Icon={Images.mood}
                layerText={'   Moods'}
                onPress={() => navigation.navigate('Moods')}
              />

              <Layer
                Icon={Images.fan}
                layerText={'        Fan'}
                onPress={() => navigation.navigate('Fan')}
              />
            </View>

            <View style={styles.main}>
              <Layer
                Icon={Images.control}
                layerText={'OtherControls'}
                onPress={() => navigation.navigate('OtherControl')}
              />

              <Layer
                Icon={Images.irrigation}
                layerText={'  Irrigation'}
                onPress={() => navigation.navigate('Irrigation')}
              />
            </View>

            <View style={styles.main}>
              <Layer
                Icon={Images.media}
                layerText={'     Media'}
                onPress={() => navigation.navigate('Media')}
              />

              <Layer
                Icon={Images.roomCamera}
                layerText={'   Camera'}
                onPress={() => navigation.navigate('Camera')}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};
export default Demokitzone;
