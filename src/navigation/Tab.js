import React from 'react';
import { Image } from 'react-native';
import {
  Ac,
  Dmx,
  Fan,
  Moods,
  RGBW,
  Light,
  Music,
  Media,
  Camera,
  Curtain,
  Irrigation,
} from '../screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//images
import Images from '../utils/images';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showIcon: true,
        // tabBarVisible: false,
        swipeEnabled: false,
        showLabel: false,
        lazyLoad: true,
      }}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="tab1"
        component={Light}
        options={{
          tabBarIcon: ({ focus }) => (
            <Image
              source={focus ? Images.lightOff1 : Images.lightOn1}
              style={{
                width: 40,
                height: 40,
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="tab2"
        component={RGBW}
        options={{
          tabBarIcon: ({ focus }) => (
            <Image
              source={focus ? Images.whiteBulb : Images.RedBulb}
              style={{
                width: 40,
                height: 40,
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="tab3"
        component={Dmx}
        options={{
          tabBarIcon: ({ focus }) => (
            <Image
              source={focus ? Images.whiteDMX : Images.redDMX}
              style={{
                width: 40,
                height: 40,
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="tab4"
        component={Ac}
        options={{
          tabBarIcon: ({ focus }) => (
            <Image
              source={focus ? Images.flowerOff : Images.flowerOn}
              style={{
                width: 40,
                height: 40,
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="tab5"
        component={Music}
        options={{
          tabBarIcon: ({ focus }) => (
            <Image
              source={focus ? Images.soundOff : Images.soundOn}
              style={{
                width: 35,
                height: 40,
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="tab6"
        component={Curtain}
        options={{
          tabBarIcon: ({ focus }) => (
            <Image
              source={focus ? Images.windowOff : Images.windowOn}
              style={{
                width: 45,
                height: 40,
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="tab7"
        component={Moods}
        options={{
          tabBarIcon: ({ focus }) => (
            <Image
              source={focus ? Images.heartOff : Images.heartOn}
              style={{
                width: 50,
                height: 45,
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="tab8"
        component={Fan}
        options={{
          tabBarIcon: ({ focus }) => (
            <Image
              source={focus ? Images.fanOff : Images.fanOn}
              style={{
                width: 40,
                height: 40,
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="tab9"
        component={Moods}
        options={{
          tabBarIcon: ({ focus }) => (
            <Image
              source={focus ? Images.otherOff : Images.otherOn}
              style={{
                width: 40,
                height: 40,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="tab10"
        component={Irrigation}
        options={{
          tabBarIcon: ({ focus }) => (
            <Image
              source={focus ? Images.treeOff : Images.treeOn}
              style={{
                width: 30,
                height: 40,
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="tab11"
        component={Media}
        options={{
          tabBarIcon: ({ focus }) => (
            <Image
              source={focus ? Images.musicOff : Images.musicOn}
              style={{
                width: 30,
                height: 30,
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="tab12"
        component={Camera}
        options={{
          tabBarIcon: ({ focus }) => (
            <Image
              source={focus ? Images.cameraOff : Images.cameraOff}
              style={{
                width: 35,
                height: 35,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default MyTabs;
