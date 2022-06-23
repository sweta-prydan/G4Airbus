import { StyleSheet } from 'react-native';

//constants
import { Colors, Fonts } from '../../constants';

const styles = StyleSheet.create({
  image: {
    width: 140,
    height: 140,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: Colors.white,
  },

  text: {
    fontSize: 18,
    textAlign: 'center',
    color: Colors.white,
    fontWeight: Fonts.FontWeight.bold,
    fontFamily: Fonts.FontFamily.bold,
  },

  separator: {
    marginVertical: 10,
  },
});
export default styles;
