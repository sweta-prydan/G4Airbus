import { StyleSheet } from 'react-native';

//constants
import { Colors, Fonts } from '../../constants';

import { responsiveFontSize } from 'react-native-responsive-dimensions';

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
    color: Colors.white,
    borderBottomWidth: 1,
    fontSize: responsiveFontSize(2.5),
    borderBottomColor: Colors.davyGrey,
    fontWeight: Fonts.FontWeight.light,
    fontFamily: Fonts.FontFamily.light,
  },

  layout: {
    flexDirection: 'row',
  },

  button: {
    minWidth: '25%',
    marginVertical: 300,
    marginHorizontal: 45,
  },
});
export default styles;
