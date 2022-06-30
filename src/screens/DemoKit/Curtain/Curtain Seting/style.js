import { StyleSheet } from 'react-native';

//Fonts
import Fonts from '../../../../constants/fonts';

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    flex: 1,
  },

  separator: {
    marginVertical: 5,
  },

  main: {
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  icon: {
    marginVertical: 10,
    marginHorizontal: 10,
    width: responsiveWidth(16),
    height: responsiveHeight(8),
  },

  title: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: Fonts.FontWeight.semibold,
    fontFamily: Fonts.FontFamily.semibold,
  },

  allow: {
    marginVertical: 20,
    fontSize: responsiveFontSize(2.8),
    fontWeight: Fonts.FontWeight.semibold,
    fontFamily: Fonts.FontFamily.semibold,
  },

  checkbox: {
    marginVertical: 10,
    width: responsiveWidth(10),
    height: responsiveHeight(5),
  },

  row1: {
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'center',
  },

  button: {
    marginVertical: 20,
    width: responsiveWidth(40),
  },
});

export default styles;
