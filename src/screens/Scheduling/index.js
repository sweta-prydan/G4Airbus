import React from 'react';
import {
  ImageBackground,
  View,
  Text,
  SafeAreaView,
  ScrollView,
} from 'react-native';

//images
import Images from '../../utils/images';

// Components
import Header from '../../components/Header';
import Button from '../../components/Button/index';

//style
import styles from './style';

const SchedulingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={Images.background} style={styles.image}>
        <Header navigation={navigation} headerText="Scheduling" />
        <SafeAreaView>
          <ScrollView>
            <View style={styles.container}>
              <View style={styles.row}>
                <View style={styles.border}>
                  <Text style={styles.data}>Schedule Name</Text>
                </View>

                <View style={styles.border}>
                  <Text style={styles.data}>Freequency</Text>
                </View>

                <View style={styles.border}>
                  <Text style={styles.data}>Time</Text>
                </View>

                <View style={styles.border}>
                  <Text style={styles.data}>Validity</Text>
                </View>
              </View>

              <View style={styles.button}>
                <Button
                  buttonText="Add"
                  onPress={() => navigation.navigate('SchedulingDropScreen')}
                />
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};
export default SchedulingScreen;
