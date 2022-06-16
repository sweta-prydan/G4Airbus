import { StyleSheet } from 'react-native';

//color
import { Colors, Fonts } from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  image: {
    flex: 1,
  },

  menuView: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.black,
  },

  header: {
    fontSize: 16,
    color: Colors.white,
    marginHorizontal: 120,
    fontWeight: Fonts.FontWeight.semibold,
    fontFamily: Fonts.FontFamily.semibold,
  },

  main: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  layer: {
    width: 200,
    height: 120,
    padding: 40,
    marginHorizontal: 20,
  },

  layer2: {
    width: 200,
    height: 120,
    padding: 40,
    marginHorizontal: 20,
    marginVertical: 20,
  },

  icon: {
    width: 35,
    height: 35,
  },

  text: {
    fontSize: 16,
    marginVertical: 4,
    color: Colors.white,
    marginHorizontal: 20,
    fontWeight: Fonts.FontWeight.semibold,
    fontFamily: Fonts.FontFamily.semibold,
  },

  text2: {
    fontSize: 16,
    marginVertical: 2,
    color: Colors.white,
    marginHorizontal: 20,
    fontWeight: Fonts.FontWeight.semibold,
    fontFamily: Fonts.FontFamily.semibold,
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
    marginHorizontal: 80,
  },

  description: {
    fontSize: 20,
    color: Colors.white,
    marginVertical: 180,
    marginHorizontal: 10,
    fontWeight: Fonts.FontWeight.semibold,
    fontFamily: Fonts.FontFamily.semibold,
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
    color: Colors.raisinBlack,
    backgroundColor: Colors.white,
    fontWeight: Fonts.FontWeight.regular,
    fontFamily: Fonts.FontFamily.default,
  },
});
export default styles;
