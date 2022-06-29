import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../constants';
import {
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

  childView: {
    marginVertical: 6,
    borderRadius: 20,
    marginHorizontal: 6,
    width: responsiveWidth(97),
    backgroundColor: Colors.transform,
  },

  SectionStyle: {
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  input: {
    marginVertical: 30,
    marginHorizontal: 30,
    width: responsiveWidth(80),
  },

  inputStyle: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    color: Colors.black,
    paddingHorizontal: 15,
    backgroundColor: Colors.white,
    fontSize: responsiveFontSize(2.5),
    fontFamily: Fonts.FontFamily.medium,
    fontWeight: Fonts.FontWeight.medium,
  },

  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: responsiveFontSize(2.5),
  },

  buttonStyle: {
    marginVertical: 10,
    marginHorizontal: 35,
  },

  registerTextStyle: {
    padding: 10,
    color: Colors.white,
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: responsiveFontSize(2.5),
    fontWeight: Fonts.FontWeight.semibold,
    fontFamily: Fonts.FontFamily.semibold,
  },
});
export default styles;
