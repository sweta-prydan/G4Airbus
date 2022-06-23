import { StyleSheet } from 'react-native';

//constants
import { Colors, Fonts } from '../../constants';

const styles = StyleSheet.create({
  menuView: {
    height: 60,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: Colors.transform3,
  },

  icon: {
    width: 35,
    height: 35,
  },

  separator: {
    marginHorizontal: 4,
  },

  header: {
    fontSize: 20,
    color: Colors.white,
    marginHorizontal: 40,
    fontFamily: Fonts.FontFamily.bold,
    fontWeight: Fonts.FontWeight.black,
  },
});
export default styles;
