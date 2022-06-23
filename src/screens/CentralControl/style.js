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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.transform3,
  },

  header: {
    fontSize: 20,
    color: Colors.white,
    marginHorizontal: 55,
    fontFamily: Fonts.FontFamily.bold,
    fontWeight: Fonts.FontWeight.black,
  },

  main: {
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  icon: {
    width: 35,
    height: 35,
  },

  separator: {
    marginHorizontal: 8,
  },

  separate: {
    marginVertical: 4,
  },
});
export default styles;
