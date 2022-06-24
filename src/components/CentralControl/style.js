import { StyleSheet } from 'react-native';

//constants
import { Colors, Fonts } from '../../constants';

const styles = StyleSheet.create({
  toggle: {
    margin: 5,
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
  },

  childView: {
    width: 350,
    height: 400,
    padding: 20,
    marginHorizontal: 5,
    marginVertical: 5,
    borderRadius: 20,
    backgroundColor: Colors.transform,
  },

  description: {
    fontSize: 20,
    marginLeft: 5,
    marginVertical: 4,
    color: Colors.white,
    marginHorizontal: 4,
    fontFamily: Fonts.FontFamily.bold,
    fontWeight: Fonts.FontWeight.regular,
  },
});
export default styles;
