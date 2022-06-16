import React, { useState } from 'react';
import {
  View,
  Text,
  Switch,
  ScrollView,
  SafeAreaView,
  ImageBackground,
} from 'react-native';

//images
import Images from '../../utils/images';

//color
import colors from '../../constants/color';

//header Component
import Header from '../../components/Header';

//style
import styles from './style';

const MusicScreen = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <ImageBackground source={Images.background} style={styles.image}>
        <Header navigation={navigation} headerText="By Browser" />
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.container}>
            <View>
              <View style={styles.toggle}>
                <Text style={styles.description}>Open/Close Service :</Text>

                <Switch
                  trackColor={{
                    false: colors.davyGrey,
                    true: colors.outerSpace,
                  }}
                  thumbColor={isEnabled ? colors.pearlAqua : colors.gray}
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              </View>

              <Text style={styles.description}>Url :</Text>

              <View style={styles.separator} />

              <View style={styles.childView}>
                <Text style={styles.description}>
                  1. Open a PC, make it and this phone in the same network.
                </Text>

                <View style={styles.separator} />

                <Text style={styles.description}>
                  2. Open the browser on the PC.
                </Text>

                <View style={styles.separator} />

                <Text style={styles.description}>
                  3. Input the URL of this phone into the browser.
                </Text>

                <View style={styles.separator} />

                <Text style={styles.description}>
                  4. Find the file 'Database.sqllite3 'You can download it and
                  upload it by browser, make sure the NAME IS Database.sqlite3
                </Text>

                <View style={styles.separator} />

                <Text style={styles.description}>
                  5. Restart this app when database has been changed.
                </Text>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};
export default MusicScreen;
