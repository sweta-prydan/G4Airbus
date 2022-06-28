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
    marginVertical: 20,
    marginHorizontal: 120,
  },

  container1: {
    alignItems: 'center',
  },

  colorpiker: {
    margin: 40,
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
    marginVertical: 20,
  },
});

export default styles;
