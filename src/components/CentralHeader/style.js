import { StyleSheet } from 'react-native';

//constants
import { Colors, Fonts } from '../../constants';

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  menuView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: responsiveHeight(8),
    backgroundColor: Colors.transform3,
  },

  header: {
    color: Colors.white,
    marginHorizontal: 70,
    fontSize: responsiveFontSize(2.8),
    fontFamily: Fonts.FontFamily.bold,
    fontWeight: Fonts.FontWeight.black,
  },

  main: {
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  icon: {
    width: responsiveWidth(8),
    height: responsiveHeight(4),
  },

  separator: {
    marginHorizontal: 8,
  },
});
export default styles;
