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

  volume: {
    width: 40,
    height: 40,
    marginVertical: 10,
    marginHorizontal: 300,
  },

  slider: {
    marginVertical: 100,
    marginHorizontal: 180,
  },

  track: {
    height: 10,
    width: 270,
    borderRadius: 50,
    transform: [{ rotate: '-90deg' }],
    backgroundColor: Colors.transform2,
  },

  thumb: {
    width: 30,
    height: 30,
    borderWidth: 8,
    borderRadius: 80,
    borderColor: Colors.gray,
    backgroundColor: Colors.davyGrey,
  },

  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  down: {
    paddingVertical: 20,
  },

  button: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },

  button1: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },

  number: {
    width: 100,
    borderWidth: 3,
    borderRadius: 5,
    borderColor: Colors.black,
  },

  childView: {
    width: 390,
    height: 600,
    marginLeft: 10,
    borderRadius: 20,
    paddingHorizontal: 40,
    backgroundColor: Colors.transform,
  },

  icon: {
    width: 60,
    height: 60,
  },

  secondrow: {
    width: 60,
    height: 60,
    marginHorizontal: 3,
  },

  play: {
    width: 80,
    height: 80,
    marginVertical: 10,
  },

  stop: {
    width: 60,
    height: 60,
    marginVertical: 20,
    marginHorizontal: 5,
  },

  group: {
    width: 220,
    flexDirection: 'row',
  },
});

export default styles;
