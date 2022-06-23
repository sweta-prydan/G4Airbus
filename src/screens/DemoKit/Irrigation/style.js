import { StyleSheet } from 'react-native';

//colors
import { Colors } from '../../../constants';

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
    marginVertical: 600,
    flexDirection: 'row',
    marginHorizontal: 130,
    justifyContent: 'center',
  },

  childView: {
    width: 390,
    padding: 20,
    height: 550,
    marginLeft: 10,
    borderRadius: 20,
    backgroundColor: Colors.transform,
  },
});

export default styles;
