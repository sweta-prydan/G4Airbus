import { StyleSheet } from 'react-native';

//constants
import { Colors, Fonts } from '../../constants';

const styles = StyleSheet.create({
  menuView: {
    height: 60,
    padding: 8,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: Colors.black,
  },

  icon: {
    width: 35,
    height: 35,
  },

  separator: {
    marginHorizontal: 6,
  },

  header: {
    fontSize: 18,
    color: Colors.white,
    marginHorizontal: 40,
    fontFamily: Fonts.FontFamily.bold,
    fontWeight: Fonts.FontWeight.bold,
  },

  text: {
    fontSize: 18,
    color: Colors.white,
    fontFamily: Fonts.FontFamily.bold,
    fontWeight: Fonts.FontWeight.regular,
  },
});
export default styles;
