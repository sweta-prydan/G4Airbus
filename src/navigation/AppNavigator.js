import React from 'react';
import {
  Ac,
  Fan,
  Dmx,
  RGBW,
  Media,
  Moods,
  Music,
  Light,
  Camera,
  Curtain,
  ACSetting,
  FanScreen,
  DMXScreen,
  DMXSetting,
  StarScreen,
  RGBWScreen,
  HVACScreen,
  HomeScreen,
  Irrigation,
  MusicScreen,
  RGBWSetting,
  FanSetting,
  Demokitzone,
  LightScreen,
  SplashScreen,
  MoodSetting,
  MusicSetting,
  LightSetting,
  OtherControl,
  OtherSetting,
  SettingScreen,
  CurtainScreen,
  SecurityScreen,
  AlaramVCScreen,
  CurtainSetting,
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
import AuthNavigator from './AuthNavigator';

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
          name="AuthNavigator"
          component={AuthNavigator}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="HomeScreen"
          options={{
            animationEnabled: true,
            header: () => null,
          }}
          component={HomeScreen}
        />

        <Stack.Screen name="Ac" component={Ac} />
        <Stack.Screen name="Fan" component={Fan} />
        <Stack.Screen name="Dmx" component={Dmx} />
        <Stack.Screen name="Rgbw" component={RGBW} />
        <Stack.Screen name="Moods" component={Moods} />
        <Stack.Screen name="Light" component={Light} />
        <Stack.Screen name="Music" component={Music} />
        <Stack.Screen name="Media" component={Media} />
        <Stack.Screen name="Camera" component={Camera} />
        <Stack.Screen name="MyTabs" component={MyTabs} />
        <Stack.Screen name="Curtain" component={Curtain} />
        <Stack.Screen name="Irrigation" component={Irrigation} />
        <Stack.Screen name="SettingScreen" component={SettingScreen} />
        <Stack.Screen
          name="LanguageSettingScreen"
          component={LanguageSettingScreen}
        />

        <Stack.Screen
          name="DatabaseSettingScreen"
          component={DatabaseSettingScreen}
        />

        <Stack.Screen name="StarScreen" component={StarScreen} />
        <Stack.Screen name="ByBrowserScreen" component={ByBrowserScreen} />
        <Stack.Screen name="ByFtpServerScreen" component={ByFtpServerScreen} />

        <Stack.Screen
          name="GlobalNetworkScreen"
          component={GlobalNetworkScreen}
        />

        <Stack.Screen name="Demokitzone" component={Demokitzone} />

        <Stack.Screen
          name="CentralControlScreen"
          component={CentralControlScreen}
        />

        <Stack.Screen name="FanScreen" component={FanScreen} />
        <Stack.Screen name="DMXScreen" component={DMXScreen} />
        <Stack.Screen name="ACSetting" component={ACSetting} />
        <Stack.Screen name="HVACScreen" component={HVACScreen} />
        <Stack.Screen name="RGBWScreen" component={RGBWScreen} />
        <Stack.Screen name="DMXSetting" component={DMXSetting} />
        <Stack.Screen name="FanSetting" component={FanSetting} />
        <Stack.Screen name="MusicScreen" component={MusicScreen} />
        <Stack.Screen name="LightScreen" component={LightScreen} />
        <Stack.Screen name="RGBWSetting" component={RGBWSetting} />
        <Stack.Screen name="MoodSetting" component={MoodSetting} />
        <Stack.Screen name="OtherSetting" component={OtherSetting} />
        <Stack.Screen name="LightSetting" component={LightSetting} />
        <Stack.Screen name="MusicSetting" component={MusicSetting} />
        <Stack.Screen name="CurtainScreen" component={CurtainScreen} />
        <Stack.Screen name="OtherControl" component={OtherControl} />
        <Stack.Screen name="SecurityScreen" component={SecurityScreen} />
        <Stack.Screen name="CurtainSetting" component={CurtainSetting} />
        <Stack.Screen name="AlaramVCScreen" component={AlaramVCScreen} />
        <Stack.Screen name="IrrigationScreen" component={IrrigationScreen} />
        <Stack.Screen name="SchedulingScreen" component={SchedulingScreen} />

        <Stack.Screen
          name="SchedulingDropScreen"
          component={SchedulingDropScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
