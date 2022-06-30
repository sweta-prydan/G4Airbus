import { StyleSheet } from 'react-native';

//responsive
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  icon: {
    marginVertical: 15,
    marginHorizontal: 60,
    height: responsiveHeight(8),
    width: responsiveWidth(16.5),
  },
});
export default styles;
