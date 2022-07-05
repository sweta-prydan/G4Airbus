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
    marginHorizontal: 100,
  },

  icon: {
    marginVertical: 20,
    alignItems: 'center',
    marginHorizontal: 140,
    justifyContent: 'center',
    width: responsiveWidth(20),
    height: responsiveHeight(9.6),
  },

  row: {
    marginHorizontal: 55,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  input: {
    marginVertical: 200,
  },

  text: {
    marginVertical: 20,
    fontSize: responsiveFontSize(2),
    fontFamily: Fonts.FontFamily.light,
    FontWeight: Fonts.FontWeight.light,
  },

  checkbox: {
    width: responsiveWidth(10),
    height: responsiveHeight(5),
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
  },

  modalView: {
    margin: 20,
    elevation: 5,
    shadowRadius: 4,
    shadowOpacity: 0.25,
    height: responsiveHeight(11.5),
    backgroundColor: Colors.arsenic,
  },

  edit: {
    marginVertical: 5,
    marginHorizontal: 20,
    fontSize: responsiveFontSize(2),
    fontFamily: Fonts.FontFamily.light,
    fontWeight: Fonts.FontWeight.light,
  },
});

export default styles;
