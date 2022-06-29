import { StyleSheet, Dimensions } from 'react-native';

//constants
import { Colors, Fonts } from '../../constants';

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

  childView: {
    padding: 8,
    opacity: 0.9,
    borderRadius: 10,
    marginVertical: 3,
    marginHorizontal: 6,
    width: responsiveWidth(96),
    height: responsiveHeight(35),
    backgroundColor: Colors.transform,
  },

  title: {
    textAlign: 'center',
    color: Colors.white,
    fontSize: responsiveFontSize(3),
    fontWeight: Fonts.FontWeight.semibold,
    fontFamily: Fonts.FontFamily.semibold,
  },

  main: {
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
  },

  example: {
    marginVertical: 5,
    color: Colors.white,
    marginHorizontal: 30,
    alignSelf: 'flex-end',
    fontSize: responsiveFontSize(1.6),
    fontFamily: Fonts.FontFamily.light,
    fontWeight: Fonts.FontWeight.light,
  },

  description: {
    color: Colors.white,
    fontSize: responsiveFontSize(2.3),
    fontWeight: Fonts.FontWeight.light,
    fontFamily: Fonts.FontFamily.light,
  },

  edit: {
    borderRadius: 5,
    color: Colors.black,
    marginHorizontal: 20,
    width: responsiveWidth(48),
    height: responsiveHeight(5),
    backgroundColor: Colors.white,
  },

  edit2: {
    borderRadius: 5,
    color: Colors.black,
    marginHorizontal: 80,
    height: responsiveHeight(5),
    width: responsiveWidth(48),
    backgroundColor: Colors.white,
  },

  input: {
    padding: 3,
    borderRadius: 5,
    color: Colors.black,
    fontSize: responsiveFontSize(2),
    backgroundColor: Colors.white,
    fontWeight: Fonts.FontWeight.regular,
    fontFamily: Fonts.FontFamily.default,
  },

  separator: {
    marginVertical: 5,
  },

  button: {
    alignSelf: 'center',
    justifyContent: 'center',
  },

  childView2: {
    padding: 8,
    opacity: 0.9,
    borderRadius: 10,
    marginVertical: 3,
    marginHorizontal: 6,
    width: responsiveWidth(96),
    height: responsiveHeight(25),
    backgroundColor: Colors.transform,
  },

  childView3: {
    padding: 8,
    opacity: 0.9,
    borderRadius: 10,
    marginVertical: 3,
    marginHorizontal: 6,
    width: responsiveWidth(97),
    height: responsiveHeight(26),
    backgroundColor: Colors.transform,
  },
});

export default styles;
