import { StyleSheet } from 'react-native';

//Fonts
import Fonts from '../../../../constants/fonts';

//responsive
import {
  responsiveWidth,
  responsiveHeight,
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

  text: {
    margin: 6,
    fontSize: 16,
    marginHorizontal: 16,
    fontWeight: Fonts.FontWeight.bold,
    fontFamily: Fonts.FontFamily.bold,
  },

  main: {
    textAlign: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  icon: {
    marginVertical: 10,
    marginHorizontal: 140,
    width: responsiveWidth(20),
    height: responsiveHeight(9.6),
  },

  title: {
    margin: 6,
    fontSize: responsiveFontSize(2.5),
    marginHorizontal: 40,
    fontWeight: Fonts.FontWeight.semibold,
    fontFamily: Fonts.FontFamily.semibold,
  },

  allow: {
    marginHorizontal: 30,
    fontSize: responsiveFontSize(2.5),
    fontWeight: Fonts.FontWeight.semibold,
    fontFamily: Fonts.FontFamily.semibold,
  },

  checkbox: {
    marginVertical: 20,
    width: responsiveWidth(16),
    height: responsiveHeight(8),
  },

  row1: {
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
  },
});

export default styles;
