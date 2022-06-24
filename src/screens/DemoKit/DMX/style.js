import { StyleSheet } from 'react-native';

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
    width: 100,
    borderRadius: 5,
    borderWidth: 3,
    borderColor: Colors.black,
  },

  childView: {
    width: 350,
    height: 550,
    padding: 20,
    borderRadius: 20,
    marginVertical: 5,
    marginHorizontal: 5,
    backgroundColor: Colors.transform,
  },
});

export default styles;
