import { extendTheme } from '@chakra-ui/react';

const breakpoints = {
  mobile: '0px',
  tablet: '656px',
  laptop: '992px',
  desktop: '1441px',
};
const colors = {
  ourBlack: '#140c40',
  ourAccent: '#9b55a2',
};

const theme = extendTheme({ breakpoints, colors });

export default theme;
