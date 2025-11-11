import { extendTheme } from '@chakra-ui/react';

const breakpoints = {
  mobile: '0px',
  xms: '400px',
  tablet: '656px',
  laptop: '992px',
  desktop: '1441px',
};
const colors = {
  ourBlack: '#140c40',
  ourAccent: '#DB7093',
};

const theme = extendTheme({ breakpoints, colors });

export default theme;
