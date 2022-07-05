import { StyleSheet } from 'react-native';

//constants
import { Colors, Fonts } from '../../../constants';

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

  main: {
    marginTop: 330,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  data: {
    color: Colors.white,
    marginVertical: 20,
    marginHorizontal: 10,
    fontSize: responsiveFontSize(2.2),
  },

  border: {
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.white,
  },

  checkbox: {
    marginVertical: 20,
    width: responsiveWidth(14),
    height: responsiveHeight(7),
  },

  row1: {
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },

  button1: {
    width: responsiveWidth(45),
  },

  icon: {
    marginVertical: 10,
    marginHorizontal: 40,
    width: responsiveWidth(10),
    height: responsiveHeight(10),
  },

  title: {
    margin: 6,
    marginHorizontal: 40,
    fontSize: responsiveFontSize(2),
    fontWeight: Fonts.FontWeight.semibold,
    fontFamily: Fonts.FontFamily.semibold,
  },

  dropdown: {
    margin: 10,
    elevation: 2,
    borderRadius: 5,
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    height: responsiveHeight(5),
    backgroundColor: Colors.white,
  },

  icon2: {
    marginRight: 5,
  },

  placeholderStyle: {
    color: Colors.black,
    backgroundColor: Colors.white,
    fontSize: responsiveFontSize(2.2),
    fontWeight: Fonts.FontWeight.semibold,
    fontFamily: Fonts.FontFamily.semibold,
  },

  selectedTextStyle: {
    color: Colors.black,
    backgroundColor: Colors.white,
    fontSize: responsiveFontSize(2.2),
    fontWeight: Fonts.FontWeight.semibold,
    fontFamily: Fonts.FontFamily.semibold,
  },

  iconStyle: {
    width: responsiveWidth(6),
    height: responsiveHeight(3),
  },

  inputSearchStyle: {
    color: Colors.black,
    height: responsiveHeight(6),
    backgroundColor: Colors.white,
    fontSize: responsiveFontSize(2.5),
    fontWeight: Fonts.FontWeight.light,
    fontFamily: Fonts.FontFamily.light,
  },
});
export default styles;
