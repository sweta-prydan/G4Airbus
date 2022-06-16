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
    padding: 6,
    fontSize: 16,
    marginVertical: 25,
    color: Colors.white,
    marginHorizontal: 20,
    borderBottomWidth: 0.2,
    borderBottomColor: Colors.white,
    fontWeight: Fonts.FontWeight.light,
    fontFamily: Fonts.FontFamily.light,
  },

  layout: {
    flexDirection: 'row',
  },

  button: {
    minWidth: '25%',
    marginBottom: 5,
    marginVertical: 380,
    marginHorizontal: 50,
  },
});
export default styles;
