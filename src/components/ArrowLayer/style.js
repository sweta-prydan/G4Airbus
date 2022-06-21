import { StyleSheet } from 'react-native';

//color
import { Colors, Fonts } from '../../constants';

const styles = StyleSheet.create({
  layer: {
    height: 120,
    padding: 10,
    opacity: 0.9,
    borderRadius: 10,
    marginVertical: 3,
    marginHorizontal: 3,
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: Colors.charlestonGreen,
  },

  symbol: {
    width: 100,
    height: 100,
  },

  text: {
    fontSize: 16,
    marginVertical: 40,
    color: Colors.white,
    marginHorizontal: 30,
    fontFamily: Fonts.FontFamily.semibold,
    fontWeight: Fonts.FontWeight.semibold,
  },

  arrow: {
    marginHorizontal: 20,
  },
});

export default styles;
