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
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    height: responsiveHeight(8),
    backgroundColor: Colors.transform3,
  },

  icon: {
    width: responsiveWidth(8),
    height: responsiveHeight(4),
  },

  separator: {
    marginHorizontal: 2,
  },

  header: {
    color: Colors.white,
    marginHorizontal: 40,
    fontSize: responsiveFontSize(3),
    fontFamily: Fonts.FontFamily.bold,
    fontWeight: Fonts.FontWeight.black,
  },
});
export default styles;
