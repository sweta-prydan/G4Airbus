import { StyleSheet } from 'react-native';

//constants
import { Colors, Fonts } from '../../constants';

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  layer: {
    padding: 20,
    opacity: 0.9,
    marginVertical: 1,
    marginHorizontal: 1,
    textAlign: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    width: responsiveWidth(45),
    height: responsiveHeight(12),
    backgroundColor: Colors.transform,
  },

  symbol: {
    width: responsiveWidth(10),
    height: responsiveHeight(5),
  },

  text: {
    padding: 15,
    color: Colors.white,
    fontSize: responsiveFontSize(2.2),
    fontFamily: Fonts.FontFamily.semibold,
    fontWeight: Fonts.FontWeight.semibold,
  },
});

export default styles;
