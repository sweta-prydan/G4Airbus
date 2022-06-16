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
    marginHorizontal: 130,
    margin: 20,
  },

  container1: {
    alignItems: 'center',
  },

  colorpiker: {
    margin: 90,
    width: 300,
    height: 330,
  },

  centeredView: {
    justifyContent: 'center',
  },

  modalView: {
    margin: 20,
    elevation: 5,
    shadowRadius: 4,
    shadowOpacity: 0.25,
    backgroundColor: Colors.black,
  },

  close: {
    marginHorizontal: 280,
  },

  cancel: {
    width: 30,
    height: 30,
    margin: 5,
    marginHorizontal: 40,
  },
});

export default styles;
