import { StyleSheet } from 'react-native';

//constants
import { Colors, Fonts } from '../../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    flex: 1,
  },

  title: {
    fontSize: 20,
    textAlign: 'center',
    color: Colors.white,
    fontWeight: Fonts.FontWeight.semibold,
    fontFamily: Fonts.FontFamily.semibold,
  },

  main: {
    marginVertical: 430,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  data: {
    fontSize: 16,
    color: Colors.white,
    marginVertical: 20,
    marginHorizontal: 10,
  },

  border: {
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.white,
  },

  dropdown: {
    margin: 14,
    height: 40,
    elevation: 2,
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    borderBottomWidth: 0.5,
    backgroundColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },

  icon: {
    marginRight: 5,
  },

  placeholderStyle: {
    fontSize: 16,
    color: Colors.white,
    backgroundColor: Colors.black,
    fontWeight: Fonts.FontWeight.semibold,
    fontFamily: Fonts.FontFamily.semibold,
  },

  selectedTextStyle: {
    fontSize: 16,
    color: Colors.white,
    backgroundColor: Colors.black,
    fontWeight: Fonts.FontWeight.semibold,
    fontFamily: Fonts.FontFamily.semibold,
  },

  iconStyle: {
    width: 30,
    height: 30,
    color: Colors.white,
    backgroundColor: Colors.black,
  },

  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color: Colors.white,
    backgroundColor: Colors.white,
    fontWeight: Fonts.FontWeight.light,
    fontFamily: Fonts.FontFamily.light,
  },

  checkbox: {
    width: 30,
    height: 30,
    marginVertical: 20,
  },

  row1: {
    flexDirection: 'row',
    marginHorizontal: 10,
  },

  button1: {
    width: 230,
  },
});
export default styles;
