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

  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  number: {
    width: 100,
    borderWidth: 3,
    borderRadius: 5,
    borderColor: Colors.black,
  },

  childView: {
    width: 390,
    height: 750,
    padding: 20,
    marginLeft: 10,
    borderRadius: 20,
    backgroundColor: Colors.transform,
  },

  icon: {
    width: 60,
    height: 60,
  },

  temp: {
    width: 160,
    height: 400,
    marginHorizontal: 90,
  },
});

export default styles;
