import { StyleSheet } from 'react-native';

//constants
import { Colors, Fonts } from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    flex: 1,
  },
  separator: {
    marginVertical: 5,
  },

  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  button: {
    margin: 10,
    elevation: 3,
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.raisinBlack,
  },

  buttonText: {
    fontSize: 14,
    lineHeight: 21,
    color: Colors.white,
    letterSpacing: 0.25,
    textTransform: 'uppercase',
    fontWeight: Fonts.FontWeight.bold,
    fontFamily: Fonts.FontFamily.bold,
  },

  symbol: {
    height: 28,
    width: 28,
  },

  number: {
    width: 130,
    borderRadius: 5,
    borderWidth: 3,
    borderColor: Colors.black,
  },
});
export default styles;
