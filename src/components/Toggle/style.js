import { StyleSheet } from 'react-native';

//constants
import { Colors, Fonts } from '../../constants';

const styles = StyleSheet.create({
  slider: {
    margin: 40,
  },

  text: {
    fontSize: 18,
    color: Colors.white,
    fontWeight: Fonts.FontWeight.semibold,
    fontFamily: Fonts.FontFamily.semibold,
  },

  track: {
    height: 10,
    borderRadius: 50,
    backgroundColor: Colors.transform,
  },

  separator: {
    marginVertical: 5,
  },

  thumb: {
    width: 30,
    height: 30,
    borderWidth: 8,
    borderRadius: 80,
    borderColor: Colors.white,
    backgroundColor: Colors.venetianRed,
  },
});
export default styles;
