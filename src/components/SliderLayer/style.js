import { StyleSheet } from 'react-native';

//color
import { Colors, Fonts } from '../../constants';

const styles = StyleSheet.create({
  layer: {
    padding: 10,
    opacity: 0.9,
    borderRadius: 10,
    marginVertical: 3,
    marginHorizontal: 3,
    flexDirection: 'row',
    backgroundColor: Colors.raisinBlack,
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
    width: 220,
    borderRadius: 50,
    backgroundColor: Colors.transform,
  },

  separator: {
    marginVertical: 5,
  },

  thumb: {
    width: 100,
    height: 'auto',
    borderRadius: '100%',
  },
});

export default styles;
