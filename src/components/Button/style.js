import { StyleSheet } from 'react-native';

//constants
import { Colors, Fonts } from '../../constants';

//responsive
import { responsiveFontSize } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  button: {
    height: 50,
    padding: 10,
    elevation: 3,
    width: '100%',
    borderWidth: 2,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.darkJungleGreen,
    backgroundColor: Colors.charlestonGreen,
  },

  text: {
    lineHeight: 21,
    color: Colors.white,
    letterSpacing: 0.25,
    textTransform: 'uppercase',
    fontSize: responsiveFontSize(2),
    fontWeight: Fonts.FontWeight.bold,
    fontFamily: Fonts.FontFamily.bold,
  },
});
export default styles;
