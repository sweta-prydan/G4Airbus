import { StyleSheet } from 'react-native';

//constants
import { Fonts, Colors } from '../../../../constants';

//responsive
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

  icon: {
    marginVertical: 10,
    marginHorizontal: 140,
    width: responsiveWidth(20),
    height: responsiveHeight(9.6),
  },

  title: {
    margin: 6,
    marginHorizontal: 40,
    fontSize: responsiveFontSize(2.5),
    fontWeight: Fonts.FontWeight.semibold,
    fontFamily: Fonts.FontFamily.semibold,
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

  icon2: {
    marginVertical: 5,
  },

  placeholderStyle: {
    color: Colors.black,
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
});

export default styles;
