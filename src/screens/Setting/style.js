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
    marginVertical: 300,
    marginHorizontal: 20,
    fontWeight: Fonts.FontWeight.black,
    fontFamily: Fonts.FontFamily.bold,
  },

  separator: {
    marginVertical: 5,
  },

  version: {
    fontSize: 20,
    bottom: 20,
    color: Colors.white,
    position: 'absolute',
    marginHorizontal: 150,
    fontWeight: Fonts.FontWeight.bold,
    fontFamily: Fonts.FontFamily.bold,
  },
});
export default styles;
