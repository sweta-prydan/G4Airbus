import { StyleSheet } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

//color
import Colors from '../../../constants/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    flex: 1,
  },

  separator: {
    marginVertical: 260,
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
});

export default styles;
