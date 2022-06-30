import { StyleSheet } from 'react-native';

//constants
import { Colors, Fonts } from '../../constants';

//responsive
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  image: {
    borderWidth: 1,
    borderRadius: 100,
    width: responsiveWidth(10),
    borderColor: Colors.white,
    height: responsiveHeight(20),
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
