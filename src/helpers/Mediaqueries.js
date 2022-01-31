const size = {
  mobileS: "20em", //320px
  mobileM: "23.4375em", //375px
  mobileL: "26.5625em", //425px
  tablet: "48em", //768px
  laptopS: "64em", //1024px
  laptop: "85.375em", //1366px
  laptopL: "90em", //1440px
  desktop: "120em", //1920px
  desktopL: "160em", //2560px
};

export const device = {
  mobileS: `min-width: ${size.mobileS}`,
  mobileM: `min-width: ${size.mobileM}`,
  mobileL: `min-width: ${size.mobileL}`,
  tablet: `min-width: ${size.tablet}`,
  laptopS: `min-width: ${size.laptopS}`,
  laptop: `min-width: ${size.laptop}`,
  laptopL: `min-width: ${size.laptopL}`,
  desktop: `min-width: ${size.desktop}`,
  desktopL: `min-width: ${size.desktopL}`,
};
