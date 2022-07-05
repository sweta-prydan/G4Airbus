import { StyleSheet } from 'react-native';

//responsive
import { responsiveHeight } from 'react-native-responsive-dimensions';

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
