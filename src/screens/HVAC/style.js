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
  container: {
    flex: 1,
  },

  image: {
    flex: 1,
  },
  separator: {
    marginVertical: 5,
  },

  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  button: {
    margin: 10,
    elevation: 3,
    paddingVertical: 10,
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'center',
    backgroundColor: Colors.charlestonGreen,
  },

  buttonText: {
    lineHeight: 21,
    color: Colors.white,
    letterSpacing: 0.25,
    textTransform: 'uppercase',
    fontSize: responsiveFontSize(2),
    fontWeight: Fonts.FontWeight.bold,
    fontFamily: Fonts.FontFamily.bold,
  },

  symbol: {
    width: responsiveWidth(7),
    height: responsiveHeight(3),
  },

  number: {
    borderWidth: 3,
    borderRadius: 5,
    width: responsiveWidth(35),
    borderColor: Colors.black,
  },
});
export default styles;
