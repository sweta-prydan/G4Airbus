import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

//images
import Images from '../../utils/images';

//style
import styles from './style';

//Component
import Button from '../../components/Button';

//color
import { colors } from '../../constants';

const AlaramVCScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={Images.background} style={styles.image}>
        <SafeAreaView>
          <ScrollView>
            <View style={styles.menuView}>
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack(null);
                }}>
                <Image source={Images.back} style={styles.icon} />
              </TouchableOpacity>
              <Text style={styles.header}>SecurityAlramVC</Text>
            </View>

            <View style={styles.separator} />
            <View style={styles.main}>
              <View style={styles.button}>
                <Button buttonText={'TEST 1'} />
              </View>
            </View>

            <View style={styles.main}>
              <TouchableHighlight
                activeOpacity={0.6}
                onPress={() => ''}
                underlayColor={colors.transform}>
                <View style={styles.layer}>
                  <Image
                    style={styles.symbol}
                    source={Images.currentLocation}
                  />

                  <Text style={styles.text}>Current</Text>
                </View>
              </TouchableHighlight>

              <TouchableHighlight
                activeOpacity={0.6}
                onPress={() => ''}
                underlayColor={colors.transform}>
                <View style={styles.layer2}>
                  <Image source={Images.emergency} style={styles.symbol} />

                  <Text style={styles.text2}>Emergency</Text>
                </View>
              </TouchableHighlight>
            </View>

            <View style={styles.main}>
              <TouchableHighlight
                activeOpacity={0.6}
                onPress={() => ''}
                underlayColor={colors.transform}>
                <View style={styles.layer}>
                  <Image source={Images.panic} style={styles.symbol} />

                  <Text style={styles.text}>Panic</Text>
                </View>
              </TouchableHighlight>

              <TouchableHighlight
                activeOpacity={0.6}
                onPress={() => ''}
                underlayColor={colors.transform}>
                <View style={styles.layer2}>
                  <Image source={Images.gas} style={styles.symbol} />

                  <Text style={styles.text2}>Gas</Text>
                </View>
              </TouchableHighlight>
            </View>

            <View style={styles.main}>
              <TouchableHighlight
                activeOpacity={0.6}
                onPress={() => ''}
                underlayColor={colors.transform}>
                <View style={styles.layer}>
                  <Image source={Images.fire} style={styles.symbol} />

                  <Text style={styles.text}>Fire</Text>
                </View>
              </TouchableHighlight>

              <TouchableHighlight
                activeOpacity={0.6}
                onPress={() => ''}
                underlayColor={colors.transform}>
                <View style={styles.layer2}>
                  <Image source={Images.temperature} style={styles.symbol} />

                  <Text style={styles.text2}>Temperature</Text>
                </View>
              </TouchableHighlight>
            </View>

            <View style={styles.main}>
              <TouchableHighlight
                activeOpacity={0.6}
                onPress={() => ''}
                underlayColor={colors.transform}>
                <View style={styles.layer}>
                  <Image source={Images.power} style={styles.symbol} />

                  <Text style={styles.text}>Power</Text>
                </View>
              </TouchableHighlight>

              <TouchableHighlight
                activeOpacity={0.6}
                onPress={() => ''}
                underlayColor={colors.transform}>
                <View style={styles.layer2}>
                  <Image source={Images.car} style={styles.symbol} />

                  <Text style={styles.text2}>Siren</Text>
                </View>
              </TouchableHighlight>
            </View>

            <View style={styles.main}>
              <TouchableHighlight
                activeOpacity={0.6}
                onPress={() => ''}
                underlayColor={colors.transform}>
                <View style={styles.layer}>
                  <Image source={Images.cloud} style={styles.symbol} />

                  <Text style={styles.text}>Day</Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                activeOpacity={0.6}
                onPress={() => ''}
                underlayColor={colors.transform}>
                <View style={styles.layer2}>
                  <Image source={Images.guest} style={styles.symbol} />

                  <Text style={styles.text2}>Night with Guest</Text>
                </View>
              </TouchableHighlight>
            </View>

            <View style={styles.main}>
              <TouchableHighlight
                activeOpacity={0.6}
                onPress={() => ''}
                underlayColor={colors.transform}>
                <View style={styles.layer}>
                  <Image source={Images.nightmode} style={styles.symbol} />

                  <Text style={styles.text}>Night</Text>
                </View>
              </TouchableHighlight>

              <TouchableHighlight
                activeOpacity={0.6}
                onPress={() => ''}
                underlayColor={colors.transform}>
                <View style={styles.layer2}>
                  <Image source={Images.away} style={styles.symbol} />

                  <Text style={styles.text2}>Away</Text>
                </View>
              </TouchableHighlight>
            </View>

            <View style={styles.main}>
              <TouchableHighlight
                activeOpacity={0.6}
                onPress={() => ''}
                underlayColor={colors.transform}>
                <View style={styles.layer}>
                  <Image source={Images.vacation} style={styles.symbol} />

                  <Text style={styles.text}>Vacation</Text>
                </View>
              </TouchableHighlight>
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};
export default AlaramVCScreen;
