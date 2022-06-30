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
  menuView: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: responsiveHeight(8),
    backgroundColor: Colors.black,
  },

  icon: {
    width: responsiveWidth(8),
    height: responsiveHeight(4),
  },

  separator: {
    marginHorizontal: 10,
  },

  header: {
    color: Colors.white,
    marginHorizontal: 40,
    fontSize: responsiveFontSize(3),
    fontFamily: Fonts.FontFamily.bold,
    fontWeight: Fonts.FontWeight.bold,
  },

  text: {
    color: Colors.white,
    fontSize: responsiveFontSize(2),
    fontFamily: Fonts.FontFamily.bold,
    fontWeight: Fonts.FontWeight.regular,
  },
});
export default styles;
