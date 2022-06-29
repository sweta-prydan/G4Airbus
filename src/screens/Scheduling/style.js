import { StyleSheet } from 'react-native';

//constants
import { Colors, Fonts } from '../../constants';

import {
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    flex: 1,
  },

  title: {
    color: Colors.white,
    textAlign: 'center',
    fontSize: responsiveFontSize(2),
    fontWeight: Fonts.FontWeight.semibold,
    fontFamily: Fonts.FontFamily.semibold,
  },

  row: {
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
  },

  data: {
    marginVertical: 20,
    color: Colors.white,
    borderColor: 'black',
    marginHorizontal: 12,
    fontSize: responsiveFontSize(2.2),
  },

  border: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: Colors.white,
    height: responsiveHeight(10),
    borderTopColor: Colors.black,
  },

  button: {
    marginVertical: 500,
    marginHorizontal: 120,
  },
});

export default styles;
