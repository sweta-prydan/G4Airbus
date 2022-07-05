import { StyleSheet } from 'react-native';

//color
import Colors from '../../../constants/color';

//responsive
import {
  responsiveWidth,
  responsiveHeight,
} from 'react-native-responsive-dimensions';

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
    marginVertical: 8,
    marginHorizontal: 300,
    width: responsiveWidth(10),
    height: responsiveHeight(5),
  },

  slider: {
    marginVertical: 100,
    marginHorizontal: 180,
  },

  track: {
    borderRadius: 0,
    height: responsiveWidth(3),
    width: responsiveHeight(36),
    transform: [{ rotate: '-90deg' }],
    backgroundColor: Colors.transform2,
  },

  thumb: {
    borderWidth: 8,
    borderRadius: 80,
    borderColor: Colors.gray,
    width: responsiveWidth(8),
    height: responsiveHeight(4),
    backgroundColor: Colors.davyGrey,
  },

  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  button: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-evenly',
  },

  button1: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-evenly',
  },

  childView: {
    borderRadius: 20,
    marginHorizontal: 5,
    height: responsiveHeight(75),
    backgroundColor: Colors.transform,
  },

  icon: {
    width: responsiveWidth(16),
    height: responsiveHeight(8),
  },

  secondrow: {
    marginHorizontal: 2,
    width: responsiveWidth(16),
    height: responsiveHeight(8),
  },

  play: {
    marginVertical: 6,
    marginHorizontal: 6,
    width: responsiveWidth(18.5),
    height: responsiveHeight(9.5),
  },

  stop: {
    marginVertical: 20,
    marginHorizontal: 5,
    width: responsiveWidth(12),
    height: responsiveHeight(6),
  },

  group: {
    flexDirection: 'row',
    width: responsiveWidth(51),
    height: responsiveWidth(23),
  },
});

export default styles;
