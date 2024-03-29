import { StyleSheet } from 'react-native';

//constants
import { Colors, Fonts } from '../../constants';

//responsive
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  menuView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: responsiveHeight(8),
    backgroundColor: Colors.transform3,
  },

  header: {
    color: Colors.white,
    marginHorizontal: 30,
    fontSize: responsiveFontSize(3),
    fontFamily: Fonts.FontFamily.bold,
    fontWeight: Fonts.FontWeight.black,
  },

  main: {
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  icon: {
    width: responsiveWidth(8),
    height: responsiveHeight(4),
  },

  separator: {
    marginHorizontal: 5,
  },
});
export default styles;
