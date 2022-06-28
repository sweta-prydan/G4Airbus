import { StyleSheet } from 'react-native';

//constants
import { Colors, Fonts } from '../../constants';

const styles = StyleSheet.create({
  main: {
    textAlign: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  text: {
    margin: 15,
    fontSize: 16,
    fontWeight: Fonts.FontWeight.bold,
    fontFamily: Fonts.FontFamily.bold,
  },

  input: {
    height: 40,
    width: '60%',
    fontSize: 18,
    borderRadius: 5,
    marginVertical: 10,
    color: Colors.white,
    textAlign: 'center',
    marginHorizontal: 20,
    fontWeight: Fonts.FontWeight.regular,
    fontFamily: Fonts.FontFamily.default,
    backgroundColor: Colors.charlestonGreen,
  },
});
export default styles;
