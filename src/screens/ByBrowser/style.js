import { StyleSheet } from 'react-native';

//constants
import { Colors, Fonts } from '../../constants';

//responsive
import {
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    flex: 1,
  },

  description: {
    marginLeft: 5,
    marginVertical: 4,
    color: Colors.white,
    fontSize: responsiveFontSize(2.7),
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
    padding: 25,
    borderRadius: 20,
    marginVertical: 5,
    marginHorizontal: 5,
    width: responsiveWidth(97),
    backgroundColor: Colors.transform,
  },
});

export default styles;
