import { StyleSheet } from 'react-native';

//constants
import { Colors, Fonts } from '../../constants';

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: Colors.white,
    fontWeight: Fonts.FontWeight.semibold,
    fontFamily: Fonts.FontFamily.semibold,
  },

  separator: {
    marginVertical: 5,
  },
});
export default styles;
