import { StyleSheet } from 'react-native';

//color
import Colors from '../../../constants/color';

import {
  responsiveHeight,
  responsiveWidth,
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

  button: {
    margin: 10,
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
    height: responsiveHeight(70),
    backgroundColor: Colors.transform,
  },
});

export default styles;
