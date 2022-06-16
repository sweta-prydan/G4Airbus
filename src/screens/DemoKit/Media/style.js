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
    justifyContent: 'space-around',
    alignItems: 'center',
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
