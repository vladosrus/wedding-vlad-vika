'use client';
import { Box, Stack, Text, VStack } from '@chakra-ui/react';

import SectionWrapper from 'components/SectionWrapper';
import CustomDivider from 'components/CustomDivider';
import NextImage from 'components/NextImage';

import VladAndVika from 'assets/illustrations/vladAndVika.png';

const Invitation = () => (
  <SectionWrapper pt={{ mobile: '30px', tablet: '50px', laptop: '60px' }}>
    <Stack
      w="full"
      maxW="800px"
      direction={{ mobile: 'column-reverse', laptop: 'row' }}
      gap={{ mobile: '30px', tablet: '40px', laptop: '70px' }}
      align="center"
    >
      <Box
        w="full"
        maxW={{ mobile: '340px', tablet: '450px', laptop: '45%' }}
        aspectRatio="1524 / 2097"
        borderRadius="full"
        overflow="hidden"
        boxShadow="0 14px 38px rgba(20, 12, 64, 0.12)"
      >
        <NextImage src={VladAndVika} alt="Влад и Вика" w="full" h="full" />
      </Box>

      <VStack gap={{ mobile: '16px', tablet: '24px', laptop: '40px' }}>
        <CustomDivider />

        <Text
          maxW={{ mobile: '350px', tablet: '500px', laptop: 'unset' }}
          fontSize={{ mobile: '22px', tablet: '24px', laptop: '26px' }}
          lineHeight="140%"
          textAlign="center"
        >
          С нетерпением ждём возможности увидеть вас на нашей свадьбе!
        </Text>

        <CustomDivider />
      </VStack>
    </Stack>
  </SectionWrapper>
);

export default Invitation;
