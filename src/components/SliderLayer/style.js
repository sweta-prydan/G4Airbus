import { StyleSheet } from 'react-native';

//color
import { Colors, Fonts } from '../../constants';

//responsive
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  layer: {
    padding: 10,
    opacity: 0.9,
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 5,
    textAlign: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.charlestonGreen,
  },

  symbol: {
    width: responsiveWidth(20),
    height: responsiveHeight(9.7),
  },

  text: {
    color: Colors.white,
    marginHorizontal: 30,
    fontSize: responsiveFontSize(2),
    fontFamily: Fonts.FontFamily.default,
    fontWeight: Fonts.FontWeight.regular,
  },

  slider: {
    margin: 10,
  },

  text1: {
    color: Colors.white,
    fontSize: responsiveFontSize(2),
    fontWeight: Fonts.FontWeight.regular,
    fontFamily: Fonts.FontFamily.default,
  },

  track: {
    borderRadius: 50,
    height: responsiveHeight(1),
    width: responsiveWidth(50),
    backgroundColor: Colors.bronze,
  },

  separator: {
    marginVertical: 5,
  },

  thumb: {
    borderWidth: 7,
    borderRadius: 80,
    width: responsiveWidth(10),
    height: responsiveHeight(5),
    borderColor: Colors.white,
    backgroundColor: Colors.venetianRed,
  },
});

export default styles;
