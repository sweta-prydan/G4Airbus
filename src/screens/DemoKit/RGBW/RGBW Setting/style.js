import { StyleSheet } from 'react-native';
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

  icon: {
    marginVertical: 10,
    marginHorizontal: 140,
    width: responsiveWidth(20),
    height: responsiveHeight(9.6),
  },
});

export default styles;
