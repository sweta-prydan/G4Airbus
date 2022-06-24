import { StyleSheet } from 'react-native';

//constants
import { Colors, Fonts } from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    flex: 1,
  },

  layout: {
    marginVertical: 250,
    marginHorizontal: 20,
    fontWeight: Fonts.FontWeight.black,
    fontFamily: Fonts.FontFamily.bold,
  },

  separator: {
    marginVertical: 5,
  },

  version: {
    bottom: 20,
    fontSize: 20,
    color: Colors.white,
    textAlign: 'center',
    alignItems: 'center',
    fontWeight: Fonts.FontWeight.bold,
    fontFamily: Fonts.FontFamily.bold,
  },
});
export default styles;
