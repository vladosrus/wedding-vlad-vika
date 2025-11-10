'use client';
import { ChakraProvider } from '@chakra-ui/react';
import theme from 'theme';

const ThemeProvider = ({ children }) => <ChakraProvider theme={theme}>{children}</ChakraProvider>;

export default ThemeProvider;
