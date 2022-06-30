import { StyleSheet } from 'react-native';

//constants
import { Colors, Fonts } from '../../constants';

//responsive
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  layer: {
    padding: 10,
    marginVertical: 3,
    marginHorizontal: 3,
    textAlign: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: responsiveWidth(98),
    height: responsiveHeight(28),
  },

  banner: {
    flex: 1,
    width: undefined,
    borderRadius: 10,
    overflow: 'hidden',
    height: undefined,
    resizeMode: 'cover',
  },

  round: {
    textAlign: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  Header: {
    borderRadius: 100,
    alignContent: 'center',
    justifyContent: 'center',
  },

  text: {
    borderRadius: 100,
    paddingVertical: 10,
    textAlign: 'center',
    color: Colors.white,
    borderTopLeftRadius: 0,
    justifyContent: 'center',
    borderBottomLeftRadius: 0,
    width: responsiveWidth(50),
    height: responsiveHeight(6),
    fontSize: responsiveFontSize(2),
    backgroundColor: Colors.transform2,
    fontWeight: Fonts.FontWeight.semibold,
    fontFamily: Fonts.FontFamily.semibold,
  },

  icon: {
    width: responsiveWidth(13),
    height: responsiveHeight(6),
  },

  arrow: {
    marginVertical: 30,
    marginHorizontal: 250,
    justifyContent: 'flex-end',
  },
});
export default styles;
