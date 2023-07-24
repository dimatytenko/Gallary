const antiAliasing = {
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
};

const weight = {
  regular: 400,
  medium: 500,
  mediumBold: 600,
  bold: 700,
};

const font = {
  primary: {
    regular: {
      fontFamily: 'Proxima Nova',
      fontWeight: weight.regular,
      ...antiAliasing,
    },
    medium: {
      fontFamily: 'Proxima Nova',
      fontWeight: weight.medium,
      ...antiAliasing,
    },
    mediumBold: {
      fontFamily: 'Proxima Nova',
      fontWeight: weight.mediumBold,
      ...antiAliasing,
    },
    bold: {
      fontFamily: 'Proxima Nova',
      fontWeight: weight.bold,
      ...antiAliasing,
    },
  },
  secondary: {
    regular: {
      fontFamily: 'Majesti Banner',
      fontWeight: weight.regular,
      ...antiAliasing,
    },
    medium: {
      fontFamily: 'Majesti Banner',
      fontWeight: weight.medium,
      ...antiAliasing,
    },
    mediumBold: {
      fontFamily: 'Majesti Banner',
      fontWeight: weight.mediumBold,
      ...antiAliasing,
    },
    bold: {
      fontFamily: 'Majesti Banner',
      fontWeight: weight.bold,
      ...antiAliasing,
    },
  },
  tertiary: {
    regular: {
      fontFamily: 'Roboto',
      fontWeight: weight.regular,
      ...antiAliasing,
    },
    medium: {
      fontFamily: 'Roboto',
      fontWeight: weight.medium,
      ...antiAliasing,
    },
    mediumBold: {
      fontFamily: 'Roboto',
      fontWeight: weight.mediumBold,
      ...antiAliasing,
    },
    bold: {
      fontFamily: 'Roboto',
      fontWeight: weight.bold,
      ...antiAliasing,
    },
  },
};

export const mixins = {
  font,
};
