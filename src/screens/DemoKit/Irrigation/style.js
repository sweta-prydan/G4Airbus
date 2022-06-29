import { StyleSheet } from 'react-native';

//colors
import { Colors } from '../../../constants';

import {
  responsiveHeight,
  responsiveWidth,
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
    padding: 20,
    borderRadius: 20,
    marginVertical: 5,
    marginHorizontal: 5,
    width: responsiveWidth(97),
    height: responsiveHeight(70),
    backgroundColor: Colors.transform,
  },
});

export default styles;
