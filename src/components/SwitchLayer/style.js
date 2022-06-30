import { StyleSheet } from 'react-native';

//constants
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
    borderRadius: 8,
    marginVertical: 3,
    textAlign: 'center',
    marginHorizontal: 3,
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
    fontFamily: Fonts.FontFamily.semibold,
    fontWeight: Fonts.FontWeight.semibold,
  },
  icon: {
    marginVertical: 8,
    height: responsiveHeight(6),
    width: responsiveWidth(24.5),
  },

  separator: {
    marginVertical: 5,
    marginHorizontal: 100,
  },
});
export default styles;
