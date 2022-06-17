import { StyleSheet } from 'react-native';

//constants
import { Colors, Fonts } from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  logo: {
    width: 100,
    height: 100,
    margin: 50,
  },

  contain: {
    margin: 20,
    alignItems: 'center',
  },

  text: {
    fontSize: 30,
    color: Colors.white,
    fontFamily: Fonts.FontFamily.bold,
    fontWeight: Fonts.FontWeight.black,
  },
});
export default styles;
