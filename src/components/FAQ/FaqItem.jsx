import { memo } from 'react';
import { HStack, Text, VStack } from '@chakra-ui/react';

import CustomButton from 'components/CustomButton';
import NextImage from 'components/NextImage';

import PurpleStar from 'assets/icons/purpleStar.svg';

const FaqItem = ({ question, answer, isBtnVisible = false }) => (
  <VStack
    w="full"
    align="stretch"
    gap={{ mobile: '10px', tablet: '13px', laptop: '16px' }}
    borderBottom="1px solid rgba(20, 12, 64, 0.12)"
    pb={{ mobile: '12px', tablet: '16px', laptop: '16px' }}
  >
    <HStack align="flex-start" gap={{ mobile: '16px', tablet: '20px', laptop: '28px' }}>
      <NextImage
        src={PurpleStar}
        alt="Розовая звёздочка"
        w="auto"
        h="auto"
        boxSize={{ mobile: '24px', tablet: '26px', laptop: '28px' }}
      />

      <VStack align="start" gap={{ mobile: '10px', tablet: '12px', laptop: '16px' }}>
        <Text
          as="h3"
          fontSize={{ mobile: '20px', tablet: '22px', laptop: '24px' }}
          lineHeight="130%"
          fontWeight="700"
        >
          {question}
        </Text>

        <Text fontSize={{ mobile: '14px', laptop: '16px' }} lineHeight="150%">
          {answer}
        </Text>
      </VStack>
    </HStack>

    {isBtnVisible && (
      <CustomButton
        text="Подарить цветы"
        link="https://ryabinaflowers.ru/svadebniy_tsvetochniy_depozit"
        maxW="unset"
      />
    )}
  </VStack>
);

export default memo(FaqItem);
