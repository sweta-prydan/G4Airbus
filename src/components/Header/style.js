import { StyleSheet } from 'react-native';

//constants
import { Colors, Fonts } from '../../constants';

const styles = StyleSheet.create({
  menuView: {
    height: 60,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.black,
  },

  back: {
    width: 35,
    height: 35,
  },

  titleView: {
    flex: 1,
    alignItems: 'center',
  },

  text: {
    fontSize: 20,
    color: Colors.white,
    fontFamily: Fonts.FontFamily.bold,
    fontWeight: Fonts.FontWeight.bold,
  },
});
export default styles;
