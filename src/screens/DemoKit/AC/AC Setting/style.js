import { StyleSheet } from 'react-native';

//constants
import { Fonts, Colors } from '../../../../constants';

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

  icon: {
    width: 50,
    height: 50,
    marginHorizontal: 40,
    marginVertical: 10,
  },

  title: {
    margin: 6,
    fontSize: 16,
    marginHorizontal: 40,
    fontWeight: Fonts.FontWeight.semibold,
    fontFamily: Fonts.FontFamily.semibold,
  },

  dropdown: {
    margin: 28,
    height: 40,
    elevation: 2,
    borderRadius: 5,
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    backgroundColor: Colors.white,
  },

  icon2: {
    marginRight: 5,
  },

  placeholderStyle: {
    fontSize: 16,
    color: Colors.black,
    backgroundColor: Colors.white,
    fontWeight: Fonts.FontWeight.semibold,
    fontFamily: Fonts.FontFamily.semibold,
  },

  selectedTextStyle: {
    fontSize: 16,
    color: Colors.black,
    backgroundColor: Colors.white,
    fontWeight: Fonts.FontWeight.semibold,
    fontFamily: Fonts.FontFamily.semibold,
  },

  iconStyle: {
    width: 30,
    height: 30,
  },

  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color: Colors.black,
    backgroundColor: Colors.white,
    fontWeight: Fonts.FontWeight.light,
    fontFamily: Fonts.FontFamily.light,
  },
});

export default styles;
