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
    padding: 8,
    opacity: 0.9,
    borderRadius: 10,
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: Colors.charlestonGreen,
  },

  symbol: {
    width: responsiveWidth(28),
    height: responsiveHeight(14),
  },

  text: {
    marginVertical: 20,
    color: Colors.white,
    marginHorizontal: 20,
    fontSize: responsiveFontSize(2.3),
    fontFamily: Fonts.FontFamily.bold,
    fontWeight: Fonts.FontWeight.bold,
  },

  buttonrow: {
    padding: 8,
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
  },

  button: {
    elevation: 3,
    borderWidth: 3,
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
    borderColor: Colors.darkJungleGreen,
    backgroundColor: Colors.charlestonGreen,
  },
});

export default styles;
