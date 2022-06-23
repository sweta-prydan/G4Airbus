import { StyleSheet } from 'react-native';

//constants
import { Colors, Fonts } from '../../constants';

const styles = StyleSheet.create({
  layer: {
    width: 185,
    padding: 22,
    height: 100,
    opacity: 0.9,
    marginVertical: 1,
    marginHorizontal: 1,
    textAlign: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.transform,
  },

  symbol: {
    width: 40,
    height: 40,
  },

  text: {
    padding: 16,
    fontSize: 16,
    color: Colors.white,
    fontFamily: Fonts.FontFamily.semibold,
    fontWeight: Fonts.FontWeight.semibold,
  },
});

export default styles;
