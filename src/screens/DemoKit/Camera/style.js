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

  childView: {
    width: 350,
    padding: 20,
    height: 550,
    borderRadius: 20,
    marginVertical: 5,
    marginHorizontal: 5,
    backgroundColor: Colors.transform,
  },
});

export default styles;
