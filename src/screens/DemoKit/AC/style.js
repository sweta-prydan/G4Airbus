import { StyleSheet } from 'react-native';

//color
import Colors from '../../../constants/color';

import {
  responsiveWidth,
  responsiveHeight,
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

  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  number: {
    borderWidth: 3,
    borderRadius: 5,
    borderColor: Colors.black,
    width: responsiveWidth(100),
  },

  childView: {
    padding: 20,
    borderRadius: 20,
    marginVertical: 5,
    marginHorizontal: 5,
    width: responsiveWidth(97),
    height: responsiveHeight(85),
    backgroundColor: Colors.transform,
  },

  icon: {
    width: responsiveWidth(20),
    height: responsiveHeight(10),
  },

  temp: {
    marginHorizontal: 90,
    width: responsiveWidth(41),
    height: responsiveHeight(50),
  },
});

export default styles;
