import { StyleSheet } from 'react-native';

//constants
import { Colors, Fonts } from '../../constants';

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  slider: {
    margin: 40,
  },

  text: {
    color: Colors.white,
    fontSize: responsiveFontSize(2.5),
    fontWeight: Fonts.FontWeight.semibold,
    fontFamily: Fonts.FontFamily.semibold,
  },

  track: {
    height: 10,
    borderRadius: 50,
    backgroundColor: Colors.transform,
  },

  separator: {
    marginVertical: 5,
  },

  thumb: {
    borderWidth: 5,
    borderRadius: 50,
    borderColor: Colors.white,
    width: responsiveWidth(8),
    height: responsiveHeight(4),
    backgroundColor: Colors.venetianRed,
  },
});
export default styles;
