import { StyleSheet } from 'react-native';
import colors from './color';

export const FontFamily = {
  bold: 'Suez-Bold',
  semibold: 'Suez-SemiBold',
  medium: 'Suez-Medium',
  default: 'Suez-Regular',
  light: 'Suez-Light',
};

export const FontWeight = {
  thin: '100',
  ultraLight: '200',
  light: '300',
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  heavy: '800',
  black: '900',
};

export const commonStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  flexCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.18,
    fontFamily: FontFamily.bold,
    color: colors.ghostWhite,
  },

  subTitle: {
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: 0,
    textAlign: 'center',
    color: colors.ghostWhite,
    fontFamily: FontFamily.regular,
  },

  h1: {
    fontSize: 32,
  },

  h2: {
    fontSize: 24,
  },

  h3: {
    fontSize: 18,
  },

  h4: {
    fontSize: 16,
  },

  h5: {
    fontSize: 14,
  },

  h6: {
    fontSize: 12,
  },
});
