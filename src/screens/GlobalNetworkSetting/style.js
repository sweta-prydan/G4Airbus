import { StyleSheet } from 'react-native';

//responsive
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

//constants
import { Colors, Fonts } from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    flex: 1,
  },

  childView: {
    padding: 8,
    opacity: 0.7,
    borderRadius: 20,
    marginHorizontal: 6,
    height: responsiveHeight(70),
    backgroundColor: Colors.black,
  },

  toggle: {
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  main: {
    textAlign: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  description: {
    marginVertical: 8,
    color: Colors.white,
    marginHorizontal: 10,
    fontSize: responsiveFontSize(2.5),
    fontWeight: Fonts.FontWeight.semibold,
    fontFamily: Fonts.FontWeight.semibold,
  },

  edit: {
    borderRadius: 5,
    width: responsiveWidth(55),
    backgroundColor: Colors.white,
  },

  edittext: {
    borderRadius: 5,
    width: responsiveWidth(90),
    backgroundColor: Colors.white,
  },

  input: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: Colors.white,
    color: Colors.charlestonGreen,
    fontSize: responsiveFontSize(2.5),
    fontWeight: Fonts.FontWeight.semibold,
    fontFamily: Fonts.FontWeight.semibold,
  },

  separator: {
    marginVertical: 5,
  },

  button: {
    marginHorizontal: 100,
  },
});
export default styles;
