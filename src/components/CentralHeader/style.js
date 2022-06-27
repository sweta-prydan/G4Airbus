import { StyleSheet } from 'react-native';

//constants
import { Colors, Fonts } from '../../constants';

const styles = StyleSheet.create({
  menuView: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.transform3,
  },

  header: {
    fontSize: 20,
    color: Colors.white,
    marginHorizontal: 50,
    fontFamily: Fonts.FontFamily.bold,
    fontWeight: Fonts.FontWeight.black,
  },

  main: {
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  icon: {
    width: 30,
    height: 30,
  },

  separator: {
    marginHorizontal: 8,
  },
});
export default styles;
