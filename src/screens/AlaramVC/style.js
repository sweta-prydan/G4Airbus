import { StyleSheet } from 'react-native';

//responsive
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

//constants
import { Fonts, Colors } from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    flex: 1,
  },

  main: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  layer: {
    marginVertical: 20,
    marginHorizontal: 50,
    width: responsiveWidth(40),
    height: responsiveHeight(15),
  },

  layer2: {
    marginVertical: 20,
    marginHorizontal: 30,
    width: responsiveWidth(35),
    height: responsiveHeight(15),
  },

  text: {
    marginVertical: 4,
    color: Colors.white,
    marginHorizontal: 12,
    fontSize: responsiveFontSize(2.5),
    fontFamily: Fonts.FontFamily.light,
    fontWeight: Fonts.FontWeight.light,
  },

  text2: {
    marginHorizontal: 4,
    color: Colors.white,
    fontSize: responsiveFontSize(2.5),
    fontFamily: Fonts.FontFamily.light,
    fontWeight: Fonts.FontWeight.light,
  },

  symbol: {
    width: 100,
    height: 120,
  },

  symbol1: {
    width: 100,
    height: 100,
  },

  symbol2: {
    width: 85,
    height: 120,
  },

  separator: {
    marginVertical: 8,
  },

  button: {
    width: responsiveWidth(30),
  },
});
export default styles;
