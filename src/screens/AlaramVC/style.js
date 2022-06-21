import { StyleSheet } from 'react-native';

//constants
import { Fonts, Colors } from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    flex: 1,
  },

  menuView: {
    height: 60,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: Colors.black,
  },

  header: {
    fontSize: 16,
    color: Colors.white,
    marginHorizontal: 120,
    fontFamily: Fonts.FontFamily.light,
    fontWeight: Fonts.FontWeight.light,
  },

  main: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  layer: {
    width: 180,
    height: 120,
    padding: 40,
    marginHorizontal: 20,
  },

  layer2: {
    width: 180,
    height: 120,
    padding: 40,
    marginVertical: 20,
    marginHorizontal: 20,
  },

  icon: {
    width: 35,
    height: 35,
  },

  text: {
    fontSize: 16,
    marginVertical: 4,
    color: Colors.white,
    marginHorizontal: 12,
    fontFamily: Fonts.FontFamily.light,
    fontWeight: Fonts.FontWeight.light,
  },

  text2: {
    fontSize: 16,
    marginHorizontal: 4,
    color: Colors.white,
    fontFamily: Fonts.FontFamily.light,
    fontWeight: Fonts.FontWeight.light,
  },

  symbol: {
    width: 80,
    height: 80,
  },

  separator: {
    marginVertical: 8,
  },

  button: {
    width: 150,
  },

  description: {
    fontSize: 20,
    marginVertical: 180,
    color: Colors.white,
    marginHorizontal: 10,
    fontFamily: Fonts.FontFamily.semibold,
    fontWeight: Fonts.FontWeight.semiboldbold,
  },

  edit: {
    width: '60%',
    borderRadius: 5,
    backgroundColor: Colors.white,
  },

  input: {
    padding: 3,
    fontSize: 18,
    borderRadius: 5,
    color: Colors.charlestonGreen,
    backgroundColor: Colors.white,
    fontFamily: Fonts.FontFamily.default,
    fontWeight: Fonts.FontWeight.medium,
  },
});
export default styles;
