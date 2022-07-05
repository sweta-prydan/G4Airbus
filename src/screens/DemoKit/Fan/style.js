import { StyleSheet } from 'react-native';

//color
import { Colors, Fonts } from '../../../constants';

//responsive
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  layer: {
    padding: 8,
    opacity: 0.9,
    borderRadius: 8,
    textAlign: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.charlestonGreen,
  },

  symbol: {
    width: responsiveWidth(20),
    height: responsiveHeight(10),
  },

  text: {
    color: Colors.white,
    marginHorizontal: 30,
    fontSize: responsiveFontSize(2.5),
    fontFamily: Fonts.FontFamily.default,
    fontWeight: Fonts.FontWeight.regular,
  },

  slider: {
    margin: 10,
  },

  text1: {
    fontSize: responsiveFontSize(2.5),
    color: Colors.white,
    fontWeight: Fonts.FontWeight.regular,
    fontFamily: Fonts.FontFamily.default,
  },

  track: {
    borderRadius: 50,
    width: responsiveWidth(30),
    height: responsiveHeight(1),
    backgroundColor: Colors.transform,
  },

  separator: {
    marginVertical: 5,
  },

  thumb: {
    width: responsiveWidth(5),
    height: responsiveHeight(2),
  },

  container: {
    flex: 1,
  },

  image: {
    flex: 1,
  },

  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  button: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  childView: {
    padding: 20,
    borderRadius: 20,
    marginVertical: 5,
    marginHorizontal: 5,
    height: responsiveHeight(70),
    backgroundColor: Colors.transform,
  },
});

export default styles;
