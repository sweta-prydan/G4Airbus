import { StyleSheet } from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

//constants
import { Colors, Fonts } from '../../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    flex: 1,
  },

  separator: {
    marginVertical: 130,
  },

  childView: {
    padding: 20,
    borderRadius: 20,
    marginVertical: 5,
    marginHorizontal: 5,
    width: responsiveWidth(97),
    height: responsiveHeight(85),
    backgroundColor: Colors.transform,
  },

  text: {
    textAlign: 'center',
    color: Colors.white,
    fontSize: responsiveFontSize(3),
    fontFamily: Fonts.FontFamily.bold,
    fontWeight: Fonts.FontWeight.regular,
  },
});

export default styles;
