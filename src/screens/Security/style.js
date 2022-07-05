import { StyleSheet } from 'react-native';

//color
import { Colors, Fonts } from '../../constants';

//responsive
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  image: {
    flex: 1,
  },

  menuView: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    height: responsiveHeight(8),
    backgroundColor: Colors.black,
  },

  header: {
    color: Colors.white,
    marginHorizontal: 100,
    fontSize: responsiveFontSize(2.8),
    fontWeight: Fonts.FontWeight.semibold,
    fontFamily: Fonts.FontFamily.semibold,
  },

  main: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  layer: {
    padding: 20,
    marginHorizontal: 20,
    width: responsiveWidth(40),
    height: responsiveHeight(20),
  },

  layer2: {
    padding: 20,
    marginVertical: 20,
    marginHorizontal: 20,
    width: responsiveWidth(40),
    height: responsiveHeight(20),
  },

  icon: {
    width: responsiveHeight(5),
    height: responsiveHeight(5),
  },

  text: {
    marginVertical: 4,
    color: Colors.white,
    marginHorizontal: 20,
    fontSize: responsiveFontSize(2.4),
    fontWeight: Fonts.FontWeight.semibold,
    fontFamily: Fonts.FontFamily.semibold,
  },

  text2: {
    marginVertical: 4,
    color: Colors.white,
    marginHorizontal: 20,
    fontSize: responsiveFontSize(2.4),
    fontWeight: Fonts.FontWeight.semibold,
    fontFamily: Fonts.FontFamily.semibold,
  },

  symbol: {
    width: responsiveWidth(26),
    height: responsiveHeight(13),
  },

  separator: {
    marginVertical: 8,
  },

  button: {
    marginHorizontal: 50,
    width: responsiveWidth(40),
  },

  description: {
    color: Colors.white,
    marginHorizontal: 10,
    fontSize: responsiveFontSize(3),
    fontWeight: Fonts.FontWeight.semibold,
    fontFamily: Fonts.FontFamily.semibold,
  },

  edit: {
    borderRadius: 5,
    width: responsiveWidth(50),
    height: responsiveHeight(5),
    backgroundColor: Colors.white,
  },

  input: {
    padding: 3,
    borderRadius: 5,
    color: Colors.charlestonGreen,
    backgroundColor: Colors.white,
    fontSize: responsiveFontSize(2.4),
    fontWeight: Fonts.FontWeight.regular,
    fontFamily: Fonts.FontFamily.default,
  },
});
export default styles;
