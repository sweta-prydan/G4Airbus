import { StyleSheet } from 'react-native';

//constants
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
    fontFamily: Fonts.FontFamily.semibold,
    fontWeight: Fonts.FontWeight.semibold,
  },
  icon: {
    width: 100,
    height: 50,
    marginVertical: 10,
  },

  separator: {
    marginVertical: 5,
    marginHorizontal: 100,
  },
});
export default styles;
