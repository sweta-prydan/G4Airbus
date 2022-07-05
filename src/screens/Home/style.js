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

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    justifyContent: 'space-between',
  },

  icon: {
    width: 35,
    height: 35,
  },

  text: {
    lineHeight: 50,
    color: Colors.white,
    textAlign: 'center',
    fontSize: responsiveFontSize(3),
    fontWeight: Fonts.FontWeight.regular,
    fontFamily: Fonts.FontFamily.default,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
  },

  modalView: {
    margin: 20,
    elevation: 5,
    borderWidth: 1,
    shadowRadius: 4,
    shadowOpacity: 0.25,
    borderColor: Colors.white,
    backgroundColor: Colors.black,
  },

  cancel: {
    width: responsiveWidth(10),
    height: responsiveHeight(5),
  },

  edit: {
    borderRadius: 5,
    marginVertical: 10,
    color: Colors.white,
    marginHorizontal: 20,
    width: responsiveWidth(78),
    height: responsiveHeight(6),
    fontSize: responsiveFontSize(2),
    fontFamily: Fonts.FontFamily.light,
    fontWeight: Fonts.FontWeight.light,
    backgroundColor: Colors.charlestonGreen,
  },

  input: {
    padding: 10,
    borderRadius: 5,
    color: Colors.white,
    fontSize: responsiveFontSize(2.8),
    fontWeight: Fonts.FontWeight.regular,
    fontFamily: Fonts.FontFamily.default,
    backgroundColor: Colors.charlestonGreen,
  },

  button: {
    marginVertical: '3%',
    marginHorizontal: '20%',
  },

  close: {
    margin: 6,
    display: 'flex',
    marginVertical: 5,
    marginHorizontal: 280,
  },

  location: {
    margin: 2,
    color: Colors.white,
    marginHorizontal: 20,
    fontSize: responsiveFontSize(1.8),
    fontWeight: Fonts.FontWeight.light,
    fontFamily: Fonts.FontFamily.light,
  },

  layout: {
    margin: 5,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },

  loading: {
    marginHorizontal: 90,
    width: responsiveWidth(35),
    height: responsiveHeight(18),
    backgroundColor: Colors.white,
  },

  camera: {
    margin: 5,
    flexDirection: 'row',
    marginHorizontal: 40,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  photo: {
    width: responsiveWidth(18),
    height: responsiveHeight(9),
  },

  font: {
    color: Colors.white,
    textAlign: 'center',
    fontSize: responsiveFontSize(2),
    fontWeight: Fonts.FontWeight.regular,
    fontFamily: Fonts.FontFamily.default,
  },

  font1: {
    color: Colors.white,
    fontSize: responsiveFontSize(2),
    fontWeight: Fonts.FontWeight.light,
    fontFamily: Fonts.FontFamily.light,
  },

  locate: {
    margin: 20,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default styles;
