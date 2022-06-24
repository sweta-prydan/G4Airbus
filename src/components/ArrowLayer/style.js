import { StyleSheet } from 'react-native';

//color
import { Colors, Fonts } from '../../constants';

const styles = StyleSheet.create({
  layer: {
    padding: 8,
    opacity: 0.9,
    borderRadius: 10,
    textAlign: 'center',
    alignItems: 'center',
    flexDirection: 'row',
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
    fontFamily: Fonts.FontFamily.bold,
    fontWeight: Fonts.FontWeight.bold,
  },
});

export default styles;
