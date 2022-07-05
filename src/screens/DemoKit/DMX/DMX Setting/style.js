import { StyleSheet } from 'react-native';

//constants
import { Fonts, Colors } from '../../../../constants';

//responsive
import {
  responsiveWidth,
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

  separator: {
    marginVertical: 5,
  },

  icon: {
    marginVertical: 10,
    marginHorizontal: 40,
    width: responsiveWidth(10),
    height: responsiveHeight(5),
  },

  title: {
    margin: 6,
    marginHorizontal: 40,
    fontSize: responsiveFontSize(2.5),
    fontWeight: Fonts.FontWeight.semibold,
    fontFamily: Fonts.FontFamily.semibold,
  },

  childView: {
    padding: 20,
    borderRadius: 20,
    marginHorizontal: 5,
    height: responsiveHeight(50),
    backgroundColor: Colors.transform,
  },

  text: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: Fonts.FontWeight.semibold,
    fontFamily: Fonts.FontFamily.semibold,
  },
});

export default styles;
