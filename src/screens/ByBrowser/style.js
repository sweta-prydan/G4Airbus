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

  description: {
    fontSize: 20,
    marginLeft: 5,
    marginVertical: 4,
    color: Colors.white,
    fontWeight: Fonts.FontWeight.regular,
    fontFamily: Fonts.FontFamily.medium,
  },

  toggle: {
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  separator: {
    marginVertical: 5,
  },

  childView: {
    width: 400,
    height: 550,
    padding: 25,
    marginLeft: 5,
    borderRadius: 20,
    backgroundColor: Colors.transform,
  },
});

export default styles;
