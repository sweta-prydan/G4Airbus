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

  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  button: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  number: {
    width: 100,
    borderRadius: 5,
    borderWidth: 3,
    borderColor: Colors.black,
  },
});

export default styles;
