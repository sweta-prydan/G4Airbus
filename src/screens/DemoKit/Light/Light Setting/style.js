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

  input: {
    height: 50,
    width: '64%',
    fontSize: 18,
    borderRadius: 5,
    marginVertical: 10,
    color: Colors.white,
    textAlign: 'center',
    marginHorizontal: 10,
    fontWeight: Fonts.FontWeight.regular,
    fontFamily: Fonts.FontFamily.default,
    backgroundColor: Colors.charlestonGreen,
  },

  text: {
    margin: 6,
    fontSize: 16,
    fontWeight: Fonts.FontWeight.bold,
    fontFamily: Fonts.FontFamily.bold,
  },

  text2: {
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
    width: 70,
    height: 70,
    marginHorizontal: 30,
    marginVertical: 10,
  },

  title: {
    margin: 6,
    fontSize: 16,
    marginHorizontal: 40,
    fontWeight: Fonts.FontWeight.semibold,
    fontFamily: Fonts.FontFamily.semibold,
  },
});

export default styles;
