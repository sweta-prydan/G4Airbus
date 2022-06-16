import { StyleSheet } from 'react-native';

//color
import { Colors, Fonts } from '../../constants';

const styles = StyleSheet.create({
  layer: {
    width: 200,
    padding: 22,
    height: 100,
    opacity: 0.9,
    marginVertical: 3,
    marginHorizontal: 3,
    flexDirection: 'row',
    backgroundColor: Colors.transform,
  },

  symbol: {
    width: 50,
    height: 50,
  },

  text: {
    fontSize: 16,
    marginVertical: 10,
    color: Colors.white,
    marginHorizontal: 30,
    fontFamily: Fonts.FontFamily.semibold,
    fontWeight: Fonts.FontWeight.semibold,
  },
});

export default styles;
