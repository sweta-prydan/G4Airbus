import { StyleSheet } from 'react-native';

//constants
import { Colors, Fonts } from '../../constants';

const styles = StyleSheet.create({
  toggle: {
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  childView: {
    width: 400,
    height: 400,
    padding: 25,
    marginLeft: 5,
    borderRadius: 20,
    backgroundColor: Colors.transform,
  },

  description: {
    fontSize: 20,
    marginLeft: 5,
    marginVertical: 4,
    color: Colors.white,
    fontFamily: Fonts.FontFamily.bold,
    fontWeight: Fonts.FontWeight.regular,
  },
});
export default styles;
