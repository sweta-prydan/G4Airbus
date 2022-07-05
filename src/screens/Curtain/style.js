import { StyleSheet } from 'react-native';

//color
import Colors from '../../constants/color';

//responsive
import { responsiveWidth } from 'react-native-responsive-dimensions';

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

  button: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  number: {
    borderWidth: 3,
    borderRadius: 5,
    borderColor: Colors.black,
    width: responsiveWidth(40),
  },
});
export default styles;
