import { StyleSheet } from 'react-native';

//constants
import { Colors, Fonts } from '../../constants';

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
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.black,
  },

  titleView: {
    flex: 1,
  },

  home: {
    width: 35,
    height: 35,
    marginHorizontal: 120,
  },

  theme: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  layer: {
    margin: 10,
    width: 450,
    height: 250,
    opacity: 0.4,
    color: Colors.black,
  },

  room: {
    width: 430,
    height: 250,
  },

  icon: {
    width: 35,
    height: 35,
  },

  symbol: {
    width: 50,
    height: 50,
  },

  heading: {
    flexDirection: 'row',
    marginVertical: 130,
  },

  Head: {
    zIndex: 1,
    fontSize: 18,
    marginStart: 0,
    position: 'absolute',
    justifyContent: 'center',
  },

  eye: {
    zIndex: 2,
    width: 42,
    height: 40,
  },

  demo: {
    height: 35,
    width: 300,
    paddingVertical: 7,
    textAlign: 'center',
    color: Colors.white,
    borderTopRightRadius: 250,
    borderBottomRightRadius: 0,
    backgroundColor: Colors.transform2,
    fontWeight: Fonts.FontWeight.bold,
    fontFamily: Fonts.FontFamily.bold,
  },

  separator: {
    marginHorizontal: 8,
  },

  star: {
    width: 100,
    height: 100,
    marginVertical: 100,
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
    width: 35,
    height: 35,
    margin: 20,
    marginHorizontal: 40,
  },

  edit: {
    height: 50,
    width: '90%',
    fontSize: 50,
    borderRadius: 5,
    marginVertical: 10,
    color: Colors.white,
    marginHorizontal: 20,
    backgroundColor: Colors.raisinBlack,
    fontWeight: Fonts.FontWeight.semibold,
    fontFamily: Fonts.FontFamily.semibold,
  },

  input: {
    padding: 10,
    fontSize: 20,
    borderRadius: 5,
    color: Colors.white,
    backgroundColor: Colors.raisinBlack,
    fontWeight: Fonts.FontWeight.regular,
    fontFamily: Fonts.FontFamily.default,
  },
  button: {
    alignSelf: 'flex-start',
    marginHorizontal: '15%',
  },

  close: {
    width: 90,
    margin: 10,
    display: 'flex',
    marginBottom: 5,
    marginHorizontal: 270,
  },

  location: {
    margin: 2,
    fontSize: 14,
    color: Colors.white,
    marginHorizontal: 20,
    fontWeight: Fonts.FontWeight.semibold,
    fontFamily: Fonts.FontFamily.semibold,
  },

  layout: {
    margin: 10,
    flexDirection: 'row',
    marginHorizontal: 10,
  },

  loading: {
    margin: 10,
    width: 100,
    height: 100,
    marginHorizontal: 130,
    backgroundColor: Colors.white,
  },

  camera: {
    margin: 10,
    flexDirection: 'row',
    marginHorizontal: 70,
    justifyContent: 'space-between',
  },

  photo: {
    width: 60,
    height: 60,
  },

  font: {
    fontSize: 16,
    textAlign: 'center',
    color: Colors.white,
    fontWeight: Fonts.FontWeight.semibold,
    fontFamily: Fonts.FontFamily.semibold,
  },

  font1: {
    fontSize: 18,
    color: Colors.white,
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
    fontSize: 18,
    color: Colors.white,
    fontWeight: Fonts.FontWeight.light,
    fontFamily: Fonts.FontFamily.light,
  },
});
export default styles;
