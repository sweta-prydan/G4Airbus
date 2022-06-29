import { StyleSheet, Dimensions } from 'react-native';

//constants
import { Colors, Fonts } from '../../constants';

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
  },

  text: {
    margin: 15,
    fontSize: 16,
    fontWeight: Fonts.FontWeight.bold,
    fontFamily: Fonts.FontFamily.bold,
  },

  input: {
    height: 40,
    width: '60%',
    fontSize: 16,
    borderRadius: 5,
    marginVertical: 10,
    color: Colors.white,
    textAlign: 'center',
    marginHorizontal: 20,
    justifyContent: 'center',
    fontWeight: Fonts.FontWeight.regular,
    fontFamily: Fonts.FontFamily.default,
    backgroundColor: Colors.charlestonGreen,
  },
});
export default styles;
