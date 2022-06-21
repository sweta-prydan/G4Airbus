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
            <DemoHeader DemoHeaderText={'DEMO KIT Zone'} />
            <View style={styles.separator} />
            <View style={styles.main}>
              <Layer
                onPress={() => navigation.navigate('MyTabs')}
                Icon={Images.roomLight}
                layerText={'Light'}
              />
              <Layer
                onPress={() => navigation.navigate('Rgbw')}
                Icon={Images.rgb}
                layerText={'RGBW'}
              />
            </View>

            <View style={styles.main}>
              <Layer
                onPress={() => navigation.navigate('Dmx')}
                Icon={Images.dmx}
                layerText={'DMX'}
              />
              <Layer
                onPress={() => navigation.navigate('Ac')}
                Icon={Images.hvac}
                layerText={'HVAC'}
              />
            </View>

            <View style={styles.main}>
              <Layer
                onPress={() => navigation.navigate('Music')}
                Icon={Images.audio}
                layerText={'Z-Audio'}
              />
              <Layer
                onPress={() => navigation.navigate('Curtain')}
                Icon={Images.curtain}
                layerText={'Curtain'}
              />
            </View>

            <View style={styles.main}>
              <Layer
                onPress={() => navigation.navigate('Mood')}
                Icon={Images.mood}
                layerText={'Modes'}
              />
              <Layer
                onPress={() => navigation.navigate('Fan')}
                Icon={Images.fan}
                layerText={'Fan'}
              />
            </View>

            <View style={styles.main}>
              <Layer
                onPress={() => navigation.navigate('MyTabs')}
                Icon={Images.control}
                layerText={'OtherControls'}
              />
              <Layer
                onPress={() => navigation.navigate('Irrigation')}
                Icon={Images.irrigation}
                layerText={'Irrigation'}
              />
            </View>

            <View style={styles.main}>
              <Layer
                onPress={() => navigation.navigate('Media')}
                Icon={Images.media}
                layerText={'Media'}
              />
              <Layer
                onPress={() => navigation.navigate('Camera')}
                Icon={Images.roomCamera}
                layerText={'Camera'}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};
export default Demokitzone;
