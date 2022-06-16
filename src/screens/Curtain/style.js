import { StyleSheet } from 'react-native';

//color
import Colors from '../../constants/color';

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
    width: 130,
    borderWidth: 3,
    borderRadius: 5,
    borderColor: Colors.black,
  },
});
export default styles;
