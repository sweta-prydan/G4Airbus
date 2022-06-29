import { StyleSheet } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  icon: {
    marginVertical: 15,
    marginHorizontal: 60,
    width: responsiveWidth(15),
    height: responsiveHeight(7),
  },
});
export default styles;
