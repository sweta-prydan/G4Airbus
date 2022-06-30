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
    padding: 5,
    opacity: 0.9,
    borderRadius: 8,
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: Colors.charlestonGreen,
  },

  symbol: {
    width: responsiveWidth(20),
    height: responsiveHeight(9.7),
  },

  text: {
    marginVertical: 20,
    color: Colors.white,
    marginHorizontal: 20,
    fontSize: responsiveFontSize(2),
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
    alignItems: 'center',
    justifyContent: 'center',
    width: responsiveWidth(18),
    height: responsiveHeight(6),
    borderColor: Colors.darkJungleGreen,
    backgroundColor: Colors.charlestonGreen,
  },
});

export default styles;
