import { StyleSheet } from 'react-native';

//color
import Colors from '../../../constants/color';

//responsive
import { responsiveHeight } from 'react-native-responsive-dimensions';

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

  childView: {
    padding: 20,
    borderRadius: 20,
    marginVertical: 5,
    marginHorizontal: 5,
    height: responsiveHeight(70),
    backgroundColor: Colors.transform,
  },
});

export default styles;
