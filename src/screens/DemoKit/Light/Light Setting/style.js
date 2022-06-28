import { StyleSheet } from 'react-native';

//Fonts
import Fonts from '../../../../constants';

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

  text: {
    margin: 6,
    fontSize: 16,
    marginHorizontal: 16,
    fontWeight: Fonts.FontWeight.bold,
    fontFamily: Fonts.FontFamily.bold,
  },

  main: {
    textAlign: 'center',
    alignItems: 'center',
    flexDirection: 'row',
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

  allow: {
    fontSize: 20,
    marginHorizontal: 30,
    fontWeight: Fonts.FontWeight.semibold,
    fontFamily: Fonts.FontFamily.semibold,
  },

  checkbox: {
    width: 30,
    height: 30,
    marginVertical: 20,
  },

  row1: {
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
  },
});

export default styles;
