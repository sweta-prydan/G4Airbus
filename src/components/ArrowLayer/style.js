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
    padding: 8,
    opacity: 0.9,
    borderRadius: 10,
    textAlign: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.charlestonGreen,
  },

  symbol: {
    width: responsiveWidth(30.8),
    height: responsiveHeight(15),
  },

  text: {
    marginVertical: 40,
    color: Colors.white,
    marginHorizontal: 20,
    fontSize: responsiveFontSize(2),
    fontFamily: Fonts.FontFamily.bold,
    fontWeight: Fonts.FontWeight.bold,
  },
});

export default styles;
