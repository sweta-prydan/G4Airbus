import { StyleSheet } from 'react-native';

//constants
import { Colors, Fonts } from '../../constants';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

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
    color: Colors.white,
    textAlign: 'center',
    alignItems: 'center',
    fontSize: responsiveFontSize(3),
    fontWeight: Fonts.FontWeight.bold,
    fontFamily: Fonts.FontFamily.bold,
  },
});
export default styles;
