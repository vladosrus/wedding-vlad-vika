import { Box } from '@chakra-ui/react';
import { Tenor_Sans, Manrope } from 'next/font/google';

import ThemeProvider from './ThemeProvider';

const siteUrl =
  process.env.NODE_ENV === 'production' ? 'https://wedding-vlad-vika.ru/' : 'http://localhost:3000';

const sameMeta = {
  title: 'Владислав и Виктория - Свадьба мечты',
  description:
    'Добро пожаловать на наш свадебный сайт! Здесь вы найдёте всю информацию о нашем торжестве: дату, место, дресс-код и немного волшебства о нас.',
};

export const metadata = {
  metadataBase: new URL(siteUrl),
  ...sameMeta,
  openGraph: { ...sameMeta, siteName: 'ASTON', type: 'website' },
};

const tenor = Tenor_Sans({
  weight: '400',
  subsets: ['cyrillic'],
  display: 'swap',
});
const manrope = Manrope({
  variable: '--font-manrope',
  weight: '400',
  subsets: ['cyrillic'],
  display: 'swap',
});

const RootLayout = ({ children }) => {
  return (
    <html lang="ru">
      <Box
        as="body"
        className={`${tenor.className} ${manrope.variable}`}
        color="#140c40"
        fontWeight="400"
        lineHeight="normal"
      >
        <ThemeProvider>{children}</ThemeProvider>
      </Box>
    </html>
  );
};

export default RootLayout;
