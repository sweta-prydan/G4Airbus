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

  childView: {
    padding: 8,
    width: 400,
    height: 300,
    opacity: 0.9,
    marginLeft: 6,
    borderRadius: 10,
    backgroundColor: Colors.transform,
  },

  title: {
    fontSize: 20,
    textAlign: 'center',
    color: Colors.white,
    fontWeight: Fonts.FontWeight.semibold,
    fontFamily: Fonts.FontFamily.semibold,
  },

  main: {
    flexDirection: 'row',
  },

  example: {
    fontSize: 14,
    marginVertical: 5,
    color: Colors.white,
    marginHorizontal: 30,
    alignSelf: 'flex-end',
    fontFamily: Fonts.FontFamily.light,
    fontWeight: Fonts.FontWeight.light,
  },

  description: {
    fontSize: 18,
    color: Colors.white,
    fontWeight: Fonts.FontWeight.light,
    fontFamily: Fonts.FontFamily.light,
  },

  edit: {
    width: 200,
    height: 40,
    borderRadius: 5,
    marginHorizontal: 20,
    color: Colors.black,
    backgroundColor: Colors.white,
  },

  edit2: {
    width: 200,
    height: 40,
    borderRadius: 5,
    marginHorizontal: 90,
    color: Colors.black,
    backgroundColor: Colors.white,
  },

  input: {
    padding: 3,
    fontSize: 18,
    borderRadius: 5,
    color: Colors.black,
    backgroundColor: Colors.white,
    fontWeight: Fonts.FontWeight.regular,
    fontFamily: Fonts.FontFamily.default,
  },

  separator: {
    marginVertical: 5,
  },

  button: {
    alignSelf: 'center',
    justifyContent: 'center',
  },

  childView2: {
    opacity: 0.9,
    width: 400,
    height: 200,
    padding: 8,
    marginLeft: 6,
    borderRadius: 10,
    backgroundColor: Colors.transform,
  },

  childView3: {
    opacity: 0.9,
    width: 400,
    padding: 8,
    height: 240,
    marginLeft: 6,
    borderRadius: 10,
    backgroundColor: Colors.transform,
  },
});

export default styles;
