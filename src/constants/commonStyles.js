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
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flexCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 17,
    fontFamily: FontFamily.bold,
    letterSpacing: -0.18,
    lineHeight: 22,
    color: colors.ghostWhite,
  },
  subTitle: {
    fontSize: 15,
    fontFamily: FontFamily.regular,
    textAlign: 'center',
    letterSpacing: 0,
    lineHeight: 20,
    color: colors.ghostWhite,
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
