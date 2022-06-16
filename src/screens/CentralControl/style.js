import { StyleSheet } from 'react-native';

//constants
import { Fonts, Colors } from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    flex: 1,
  },

  menuView: {
    height: 60,
    padding: 20,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.black,
  },

  header: {
    fontSize: 16,
    marginHorizontal: 55,
    color: Colors.white,
    fontFamily: Fonts.FontFamily.light,
    fontWeight: Fonts.FontWeight.light,
  },

  main: {
    flexDirection: 'row',
  },

  icon: {
    width: 35,
    height: 35,
  },

  separator: {
    marginHorizontal: 8,
  },
});
export default styles;
