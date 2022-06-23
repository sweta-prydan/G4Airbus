import { StyleSheet } from 'react-native';

//Fonts
import { Fonts } from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    flex: 1,
  },

  layout: {
    marginVertical: 280,
    marginHorizontal: 40,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: Fonts.FontWeight.black,
    fontFamily: Fonts.FontFamily.bold,
  },

  separator: {
    marginVertical: 10,
  },
});
export default styles;
