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
    alignItems: 'center',
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'space-around',
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
