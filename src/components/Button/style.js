import { StyleSheet } from 'react-native';

//constants
import { Colors, Fonts } from '../../constants';

import { responsiveFontSize } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  button: {
    height: 50,
    padding: 10,
    elevation: 3,
    width: '100%',
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.darkJungleGreen,
    backgroundColor: Colors.charlestonGreen,
  },

  text: {
    lineHeight: 21,
    letterSpacing: 0.25,
    color: Colors.white,
    textTransform: 'uppercase',
    fontSize: responsiveFontSize(1.9),
    fontWeight: Fonts.FontWeight.bold,
    fontFamily: Fonts.FontFamily.bold,
  },
});
export default styles;
