import { extendTheme } from '@chakra-ui/react';

const breakpoints = {
  mobile: '0px',
  smallMobile: '320px',
  tablet: '656px',
  md: '742px',
  laptop: '992px',
  desktop: '1441px',
};
const colors = {
  ourBlack: '#140c40',
  ourGray: '#140c4014',
  ourAccent: '#DB7093',
};
const styles = { global: { html: { scrollBehavior: 'smooth' } } };

const theme = extendTheme({ breakpoints, colors, styles });

export default theme;
