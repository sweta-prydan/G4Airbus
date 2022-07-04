import { StyleSheet } from 'react-native';

//constants
import { Fonts } from '../../../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    flex: 1,
  },

  separator: {
    marginHorizontal: 100,
    marginVertical: 10,
  },

  icon: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  row: {
    marginHorizontal: 55,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  input: {
    marginVertical: 250,
  },
  text: {
    marginVertical: 20,
    fontFamily: Fonts.FontFamily.light,
    FontWeight: Fonts.FontWeight.light,
  },

  checkbox: {
    width: 30,
    height: 30,
  },

  button: {
    width: 30,
    height: 30,
    marginVertical: 20,
    marginHorizontal: 200,
  },
});

export default styles;
