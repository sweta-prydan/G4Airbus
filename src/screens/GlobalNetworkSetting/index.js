import React, { useState } from 'react';
import {
  View,
  Text,
  Switch,
  TextInput,
  ScrollView,
  SafeAreaView,
  ImageBackground,
} from 'react-native';

//images
import Images from '../../utils/images';

//Components
import Header from '../../components/Header';
import Button from '../../components/Button/index';

//color
import Colors from '../../constants/color';

//style
import styles from './style';

const GlobalNetworkScreen = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [shouldShow, setShouldShow] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const modal = () => setShouldShow(previousState => !previousState);

  return (
    <View style={styles.container}>
      <ImageBackground source={Images.background} style={styles.image}>
        <Header navigation={navigation} headerText="Global Network Setting" />

        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.container}>
            <View style={styles.toggle}>
              <Text style={styles.description}>Auto </Text>

              <Switch
                value={(isEnabled, shouldShow)}
                onValueChange={(toggleSwitch, modal)}
                thumbColor={isEnabled ? Colors.pearlAqua : Colors.gray}
                trackColor={{ false: Colors.davyGrey, true: Colors.outerSpace }}
              />
            </View>

            <Text>Network Setting</Text>
            {shouldShow ? (
              <View>
                <View style={styles.childView}>
                  <View style={styles.container}>
                    <View style={styles.main}>
                      <View>
                        <Text style={styles.description}>     Phone IP    </Text>
                      </View>

                      <View style={styles.edit}>
                        <TextInput style={styles.input} />
                      </View>
                    </View>

                    <View style={styles.separator} />

                    <View style={styles.main}>
                      <View>
                        <Text style={styles.description}>Router Real IP</Text>
                      </View>

                      <View style={styles.edit}>
                        <TextInput style={styles.input} />
                      </View>
                    </View>

                    <View style={styles.separator} />

                    <View style={styles.main}>
                      <Text style={styles.description}>
                        Enter Your DNS Domain Name{' '}
                      </Text>
                    </View>

                    <View style={styles.edittext}>
                      <TextInput
                        style={styles.input}
                        placeholder="www.google.com"
                        placeholderTextColor={Colors.gray}
                      />
                    </View>

                    <View style={styles.separator} />

                    <View style={styles.button}>
                      <Button
                        buttonText="Get My IP "
                        onPress={() => navigation.navigate('StarScreen')}
                      />
                    </View>

                    <View style={styles.separator} />

                    <View style={styles.edittext}>
                      <TextInput style={styles.input} />
                    </View>

                    <View style={styles.separator} />

                    <View style={styles.button}>
                      <Button
                        buttonText="Save "
                        onPress={() => navigation.navigate('StarScreen')}
                      />
                    </View>
                  </View>
                </View>
              </View>
            ) : null}
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};
export default GlobalNetworkScreen;
