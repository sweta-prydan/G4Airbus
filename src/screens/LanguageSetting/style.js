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

  lang: {
    padding: 3,
    margin: 16,
    fontSize: 16,
    color: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: Colors.davyGrey,
    fontWeight: Fonts.FontWeight.light,
    fontFamily: Fonts.FontFamily.light,
  },

  layout: {
    flexDirection: 'row',
    textAlign: 'center',
    alignContent: 'center',
  },

  button: {
    minWidth: '25%',
    marginVertical: 480,
    marginHorizontal: 50,
  },
});
export default styles;
