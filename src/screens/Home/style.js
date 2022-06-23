import { StyleSheet } from 'react-native';

//constants
import { Colors, Fonts } from '../../constants';

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
    fontSize: 18,
    lineHeight: 50,
    color: Colors.white,
    textAlign: 'center',
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
    width: 35,
    height: 35,
    margin: 10,
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
    backgroundColor: Colors.charlestonGreen,
    fontFamily: Fonts.FontFamily.light,
    fontWeight: Fonts.FontWeight.light,
  },

  input: {
    fontSize: 20,
    padding: 10,
    borderRadius: 5,
    color: Colors.white,
    fontWeight: Fonts.FontWeight.regular,
    fontFamily: Fonts.FontFamily.default,
    backgroundColor: Colors.charlestonGreen,
  },

  button: {
    width: 140,
    marginHorizontal: '5%',
    marginVertical: '2%',
  },

  close: {
    width: 90,
    margin: 5,
    marginBottom: 5,
    display: 'flex',
    marginHorizontal: 280,
  },

  location: {
    margin: 2,
    fontSize: 14,
    color: Colors.white,
    marginHorizontal: 20,
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
    width: 100,
    height: 100,
    marginHorizontal: 130,
    backgroundColor: Colors.white,
  },

  camera: {
    margin: 5,
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
    color: Colors.white,
    textAlign: 'center',
    fontWeight: Fonts.FontWeight.regular,
    fontFamily: Fonts.FontFamily.default,
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
});
export default styles;
