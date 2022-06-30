import { StyleSheet } from 'react-native';

//constants
import { Colors, Fonts } from '../../constants';

//responsive
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  toggle: {
    margin: 5,
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
  },

  childView: {
    padding: 20,
    borderRadius: 15,
    marginVertical: 5,
    marginHorizontal: 5,
    width: responsiveWidth(97),
    height: responsiveHeight(40),
    backgroundColor: Colors.transform,
  },

  description: {
    marginVertical: 5,
    marginHorizontal: 5,
    color: Colors.white,
    fontSize: responsiveFontSize(2.5),
    fontFamily: Fonts.FontFamily.bold,
    fontWeight: Fonts.FontWeight.regular,
  },
});
export default styles;
