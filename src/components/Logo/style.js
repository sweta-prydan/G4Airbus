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
  container: {
    flex: 1,
  },

  logo: {
    margin: 20,
    width: responsiveWidth(30),
    height: responsiveHeight(14.5),
  },

  contain: {
    margin: 20,
    alignItems: 'center',
  },

  text: {
    color: Colors.white,
    fontSize: responsiveFontSize(4),
    fontFamily: Fonts.FontFamily.bold,
    fontWeight: Fonts.FontWeight.black,
  },
});
export default styles;
