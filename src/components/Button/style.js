import { StyleSheet } from 'react-native';

//constants
import { Colors, Fonts } from '../../constants';

const styles = StyleSheet.create({
  button: {
    height: 50,
    elevation: 3,
    width: '100%',
    borderWidth: 3,
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.darkJungleGreen,
    backgroundColor: Colors.charlestonGreen,
  },

  text: {
    fontSize: 14,
    lineHeight: 21,
    color: Colors.white,
    letterSpacing: 0.25,
    textTransform: 'uppercase',
    fontWeight: Fonts.FontWeight.bold,
    fontFamily: Fonts.FontFamily.bold,
  },
});
export default styles;
