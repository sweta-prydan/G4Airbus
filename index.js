/**
 * @format
 */

import { AppRegistry } from 'react-native';

import { name as appName } from './app.json';
import { Platform } from 'react-native';
import { ViewPropTypes } from 'deprecated-react-native-prop-types';

import App from './src/index';

AppRegistry.registerComponent(appName, () => App);
