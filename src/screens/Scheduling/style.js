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

  title: {
    fontSize: 20,
    color: Colors.white,
    textAlign: 'center',
    fontWeight: Fonts.FontWeight.semibold,
    fontFamily: Fonts.FontFamily.semibold,
  },

  row: {
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
  },

  data: {
    fontSize: 16,
    marginVertical: 20,
    color: Colors.white,
    borderColor: 'black',
    marginHorizontal: 12,
  },

  border: {
    height: 70,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: Colors.white,
    borderTopColor: Colors.black,
  },

  button: {
    width: 100,
    marginVertical: 500,
    marginHorizontal: 120,
  },
});

export default styles;
