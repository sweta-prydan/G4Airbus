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
    width: 350,
    padding: 25,
    borderRadius: 20,
    marginVertical: 5,
    marginHorizontal: 5,
    backgroundColor: Colors.transform,
  },
});

export default styles;
