import { StyleSheet } from 'react-native';

//constants
import { Colors, Fonts } from '../../constants';

const styles = StyleSheet.create({
  layer: {
    width: '99%',
    padding: 10,
    height: 240,
    marginVertical: 3,
    flexDirection: 'row',
    marginHorizontal: 3,
  },

  banner: {
    flex: 1,
    width: undefined,
    borderRadius: 10,
    overflow: 'hidden',
    height: undefined,
    resizeMode: 'cover',
  },

  round: {
    marginTop: 20,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
  },

  Header: {
    fontSize: 18,
    borderRadius: 100,
    alignContent: 'center',
    justifyContent: 'center',
  },
  text: {
    height: 35,
    width: 160,
    padding: 'auto',
    borderRadius: 100,
    paddingVertical: 7,
    textAlign: 'center',
    color: Colors.white,
    borderTopLeftRadius: 0,
    justifyContent: 'center',
    borderBottomLeftRadius: 0,
    backgroundColor: Colors.transform2,
    fontWeight: Fonts.FontWeight.semibold,
    fontFamily: Fonts.FontFamily.semibold,
  },

  icon: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
  },
  arrow: {
    marginVertical: 20,
    marginHorizontal: 300,
    justifyContent: 'flex-end',
  },
});
export default styles;
