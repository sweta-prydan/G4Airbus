import { StyleSheet } from 'react-native';

//color
import { Colors, Fonts } from '../../../constants';

const styles = StyleSheet.create({
  layer: {
    padding: 10,
    opacity: 0.9,
    marginVertical: 3,
    marginHorizontal: 3,
    textAlign: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.charlestonGreen,
  },

  symbol: {
    width: 80,
    height: 80,
  },

  text: {
    fontSize: 16,
    color: Colors.white,
    marginHorizontal: 30,
    fontFamily: Fonts.FontFamily.default,
    fontWeight: Fonts.FontWeight.regular,
  },

  slider: {
    margin: 10,
  },

  text1: {
    fontSize: 18,
    color: Colors.white,
    fontWeight: Fonts.FontWeight.regular,
    fontFamily: Fonts.FontFamily.default,
  },

  track: {
    height: 10,
    width: 130,
    borderRadius: 50,
    backgroundColor: Colors.transform,
  },

  separator: {
    marginVertical: 5,
  },

  thumb: {
    width: 20,
    height: 30,
  },

  container: {
    flex: 1,
  },

  image: {
    flex: 1,
  },

  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  button: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  number: {
    width: 100,
    borderWidth: 3,
    borderRadius: 5,
    borderColor: Colors.black,
  },

  childView: {
    width: 390,
    height: 550,
    padding: 20,
    marginLeft: 10,
    borderRadius: 20,
    backgroundColor: Colors.transform,
  },
});

export default styles;
