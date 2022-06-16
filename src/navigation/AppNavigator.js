import React from 'react';
import {
  Ac,
  Dmx,
  RGBW,
  Mood,
  Media,
  Music,
  Camera,
  Light,
  Curtain,
  FanScreen,
  DMXScreen,
  StarScreen,
  RGBWScreen,
  HVACScreen,
  HomeScreen,
  Irrigation,
  Demokitzone,
  MusicScreen,
  LightScreen,
  SplashScreen,
  SettingScreen,
  CurtainScreen,
  SecurityScreen,
  AlaramVCScreen,
  ByBrowserScreen,
  IrrigationScreen,
  SchedulingScreen,
  ByFtpServerScreen,
  GlobalNetworkScreen,
  SchedulingDropScreen,
  CentralControlScreen,
  LanguageSettingScreen,
  DatabaseSettingScreen,
} from '../screens';
import MyTabs from './Tab';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="SplashScreen"
          options={{
            animationEnabled: false,
            header: () => null,
          }}
          component={SplashScreen}
        />

        <Stack.Screen
          name="HomeScreen"
          options={{
            animationEnabled: true,
            header: () => null,
          }}
          component={HomeScreen}
        />
        {/* <Stack.Group initialRouteName="MyTabs"> */}
        <Stack.Screen name="MyTabs" component={MyTabs} />

        <Stack.Screen name="Light" component={Light} />

        <Stack.Screen name="Dmx" component={Dmx} />

        <Stack.Screen name="rgbw" component={RGBW} />

        <Stack.Screen name="Ac" component={Ac} />

        <Stack.Screen name="Curtain" component={Curtain} />

        <Stack.Screen name="Mood" component={Mood} />

        <Stack.Screen name="Camera" component={Camera} />

        <Stack.Screen name="Music" component={Music} />

        <Stack.Screen name="Media" component={Media} />

        <Stack.Screen name="Irrigation" component={Irrigation} />
        {/* </Stack.Group> */}
        <Stack.Screen name="SettingScreen" component={SettingScreen} />

        <Stack.Screen
          name="LanguageSettingScreen"
          component={LanguageSettingScreen}
        />

        <Stack.Screen
          name="DatabaseSettingScreen"
          component={DatabaseSettingScreen}
        />

        <Stack.Screen name="ByBrowserScreen" component={ByBrowserScreen} />

        <Stack.Screen name="ByFtpServerScreen" component={ByFtpServerScreen} />

        <Stack.Screen name="StarScreen" component={StarScreen} />

        <Stack.Screen
          name="GlobalNetworkScreen"
          component={GlobalNetworkScreen}
        />

        <Stack.Screen name="Demokitzone" component={Demokitzone} />

        <Stack.Screen
          name="CentralControlScreen"
          component={CentralControlScreen}
        />

        <Stack.Screen name="MusicScreen" component={MusicScreen} />

        <Stack.Screen name="IrrigationScreen" component={IrrigationScreen} />

        <Stack.Screen name="LightScreen" component={LightScreen} />

        <Stack.Screen name="FanScreen" component={FanScreen} />

        <Stack.Screen name="CurtainScreen" component={CurtainScreen} />

        <Stack.Screen name="HVACScreen" component={HVACScreen} />

        <Stack.Screen name="RGBWScreen" component={RGBWScreen} />

        <Stack.Screen name="DMXScreen" component={DMXScreen} />

        <Stack.Screen name="SecurityScreen" component={SecurityScreen} />

        <Stack.Screen name="SchedulingScreen" component={SchedulingScreen} />

        <Stack.Screen name="AlaramVCScreen" component={AlaramVCScreen} />

        <Stack.Screen
          name="SchedulingDropScreen"
          component={SchedulingDropScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
