import { StyleSheet } from 'react-native';

//constants
import { Colors, Fonts } from '../../constants';

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 120,
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
    marginVertical: 5,
  },
});
export default styles;
