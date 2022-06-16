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
    flexDirection: 'row',
    marginVertical: 600,
    marginHorizontal: 130,
    justifyContent: 'center',
  },

  childView: {
    width: 390,
    height: 550,
    padding: 20,
    marginLeft: 10,
    borderRadius: 20,
    backgroundColor: Colors.transform,
  },
});

export default styles;
