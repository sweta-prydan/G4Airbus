import { StyleSheet } from 'react-native';

//constants
import { Colors, Fonts } from '../../constants';

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  image: {
    flex: 1,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
  },

  menuView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: responsiveHeight(8),
    backgroundColor: Colors.black,
  },

  titleView: {
    flex: 1,
  },

  home: {
    marginHorizontal: 100,
    height: responsiveHeight(5),
    width: responsiveWidth(10),
  },

  theme: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  layer: {
    margin: 10,
    opacity: 0.4,
    color: Colors.black,
    width: responsiveWidth(10),
    height: responsiveHeight(10),
  },

  room: {
    width: responsiveWidth(99),
    height: responsiveHeight(30),
  },

  icon: {
    width: responsiveWidth(10),
    height: responsiveHeight(5),
  },

  symbol: {
    width: responsiveWidth(10),
    height: responsiveHeight(5),
  },

  heading: {
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
    marginVertical: 130,
  },

  Head: {
    zIndex: 1,
    marginStart: 0,
    position: 'absolute',
    justifyContent: 'center',
  },

  eye: {
    zIndex: 2,
    width: responsiveWidth(13),
    height: responsiveHeight(5),
  },

  demo: {
    textAlign: 'center',
    paddingVertical: 7,
    color: Colors.white,
    borderRadius: 50,
    borderBottomLeftRadius: 0,
    borderBottomStartRadius: 400,
    borderTopEndRadius: 400,
    borderTopLeftRadius: 0,
    transform: [{ scaleX: 1 }],
    width: responsiveWidth(90),
    height: responsiveHeight(4),
    fontSize: responsiveFontSize(2),
    fontWeight: Fonts.FontWeight.bold,
    fontFamily: Fonts.FontFamily.bold,
    backgroundColor: Colors.transform2,
  },

  separator: {
    marginHorizontal: 8,
  },

  star: {
    marginVertical: 100,
    width: responsiveWidth(36),
    height: responsiveHeight(17.5),
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
    margin: 20,
    marginHorizontal: 30,
    width: responsiveWidth(10),
    height: responsiveHeight(5),
  },

  edit: {
    borderRadius: 5,
    marginVertical: 10,
    color: Colors.white,
    marginHorizontal: 20,
    width: responsiveWidth(78),
    height: responsiveHeight(7),
    fontSize: responsiveFontSize(2.8),
    fontWeight: Fonts.FontWeight.semibold,
    fontFamily: Fonts.FontFamily.semibold,
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
    marginHorizontal: 15,
    alignSelf: 'flex-start',
    width: responsiveWidth(33),
  },

  close: {
    display: 'flex',
    marginHorizontal: 230,
  },

  location: {
    color: Colors.white,
    marginHorizontal: 20,
    fontSize: responsiveFontSize(2),
    fontWeight: Fonts.FontWeight.semibold,
    fontFamily: Fonts.FontFamily.semibold,
  },

  layout: {
    margin: 10,
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },

  loading: {
    margin: 10,
    marginHorizontal: 100,
    width: responsiveWidth(30),
    height: responsiveHeight(15),
    backgroundColor: Colors.white,
  },

  camera: {
    margin: 10,
    flexDirection: 'row',
    marginHorizontal: 50,
    justifyContent: 'space-between',
  },

  photo: {
    width: responsiveWidth(18),
    height: responsiveHeight(9),
  },

  font: {
    textAlign: 'center',
    alignItems: 'center',
    color: Colors.white,
    fontSize: responsiveFontSize(2),
    fontWeight: Fonts.FontWeight.semibold,
    fontFamily: Fonts.FontFamily.semibold,
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

  text: {
    color: Colors.white,
    fontSize: responsiveFontSize(2),
    fontWeight: Fonts.FontWeight.light,
    fontFamily: Fonts.FontFamily.light,
  },
});
export default styles;
