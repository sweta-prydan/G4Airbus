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

  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  button: {
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  number: {
    borderWidth: 2,
    borderRadius: 8,
    width: responsiveWidth(30),
    borderColor: Colors.black,
  },
});
export default styles;
