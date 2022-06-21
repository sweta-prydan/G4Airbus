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

  down: {
    paddingVertical: 400,
  },

  button: {
    flexDirection: 'row',
    position:'absolute',
    // marginVertical: 100,
    // justifyContent: 'space-evenly',
  },
  button1: {
    flexDirection: 'row',
    marginVertical: 10,
    position:'absolute',
    justifyContent: 'space-evenly',
  },
  number: {
    width: 100,
    borderRadius: 5,
    borderWidth: 3,
    borderColor: Colors.black,
  },

  childView: {
    width: 390,
    height: 600,
    paddingHorizontal: 40,
    marginLeft: 10,
    borderRadius: 20,
    backgroundColor: Colors.transform,
  },

  icon: {
    width: 60,
    height: 60,
  },
});

export default styles;
