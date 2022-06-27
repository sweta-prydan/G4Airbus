import { StyleSheet } from 'react-native';

//constants
import { Colors, Fonts } from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    flex: 1,
  },

  childView: {
    padding: 8,
    width: 395,
    height: 700,
    opacity: 0.7,
    borderRadius: 20,
    marginHorizontal: 6,
    backgroundColor: Colors.black,
  },

  toggle: {
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  title: {
    fontSize: 20,
    color: Colors.white,
    textAlign: 'center',
    fontWeight: Fonts.FontWeight.semibold,
    fontFamily: Fonts.FontFamily.semibold,
  },

  main: {
    textAlign: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  example: {
    fontSize: 14,
    marginVertical: 5,
    color: Colors.white,
    marginHorizontal: 30,
    alignSelf: 'flex-end',
    fontFamily: Fonts.FontFamily.light,
    fontWeight: Fonts.FontWeight.light,
  },

  description: {
    fontSize: 16,
    marginVertical: 8,
    color: Colors.white,
    marginHorizontal: 10,
    fontWeight: Fonts.FontWeight.semibold,
    fontFamily: Fonts.FontWeight.semibold,
  },

  edit: {
    width: '58%',
    borderRadius: 5,
    backgroundColor: Colors.white,
  },

  edittext: {
    width: '99.5%',
    borderRadius: 5,
    backgroundColor: Colors.white,
  },

  input: {
    padding: 5,
    fontSize: 18,
    borderRadius: 5,
    backgroundColor: Colors.white,
    color: Colors.charlestonGreen,
    fontWeight: Fonts.FontWeight.semibold,
    fontFamily: Fonts.FontWeight.semibold,
  },

  separator: {
    marginVertical: 5,
  },

  button: {
    marginHorizontal: 150,
  },

  childView2: {
    padding: 8,
    width: 350,
    height: 190,
    opacity: 0.7,
    marginLeft: 6,
    borderRadius: 10,
    backgroundColor: Colors.black,
  },

  childView3: {
    padding: 8,
    width: 350,
    height: 220,
    opacity: 0.7,
    marginLeft: 6,
    borderRadius: 10,
    backgroundColor: Colors.black,
  },
});
export default styles;
