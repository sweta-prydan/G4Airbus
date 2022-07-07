import { StyleSheet } from 'react-native';

//Constants
import { Fonts, Colors } from '../../../../constants';

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

  icon: {
    marginVertical: 10,
    marginHorizontal: 35,
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
    marginHorizontal: 50,
    fontSize: responsiveFontSize(2.5),
    fontWeight: Fonts.FontWeight.semibold,
    fontFamily: Fonts.FontFamily.semibold,
  },

  checkbox: {
    width: responsiveWidth(12),
    height: responsiveHeight(6),
  },

  row1: {
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
  },

  placeholderStyle: {
    color: Colors.black,
    textAlign: 'center',
    backgroundColor: Colors.white,
    fontSize: responsiveFontSize(2.5),
    fontWeight: Fonts.FontWeight.semibold,
    fontFamily: Fonts.FontFamily.semibold,
  },

  selectedTextStyle: {
    color: Colors.black,
    backgroundColor: Colors.white,
    fontSize: responsiveFontSize(2.5),
    fontWeight: Fonts.FontWeight.semibold,
    fontFamily: Fonts.FontFamily.semibold,
  },

  iconStyle: {
    width: responsiveWidth(8),
    height: responsiveHeight(4),
  },

  inputSearchStyle: {
    color: Colors.black,
    backgroundColor: Colors.white,
    fontSize: responsiveFontSize(2.5),
    fontWeight: Fonts.FontWeight.light,
    fontFamily: Fonts.FontFamily.light,
  },
  dropdown: {
    margin: 28,
    elevation: 2,
    borderRadius: 5,
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    height: responsiveHeight(5),
    backgroundColor: Colors.white,
  },
});

export default styles;
