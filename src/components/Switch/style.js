import { StyleSheet } from 'react-native';

//constants
import { Colors, Fonts } from '../../constants';

//responsive
import { responsiveFontSize } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  text: {
    color: Colors.white,
    fontSize: responsiveFontSize(2),
    fontWeight: Fonts.FontWeight.semibold,
    fontFamily: Fonts.FontFamily.semibold,
  },

  separator: {
    marginVertical: 5,
  },
});
export default styles;
