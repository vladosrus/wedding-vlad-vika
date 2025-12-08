import { Text, VStack } from '@chakra-ui/react';

import CustomDivider from 'components/CustomDivider';
import SectionWrapper from 'components/SectionWrapper';

const TextGreetings = () => (
  <SectionWrapper>
    <VStack
      w="full"
      maxW={{ mobile: '500px', laptop: '900px' }}
      gap={{ mobile: '24px', laptop: '32px' }}
    >
      <CustomDivider />

      <Text fontSize={{ mobile: '18px', laptop: '32px' }} lineHeight="132%" textAlign="center">
        Мы были бы счастливы разделить с вами этот важный и особенный для нас день — день нашей
        свадьбы!
      </Text>

      <CustomDivider />
    </VStack>
  </SectionWrapper>
);

export default TextGreetings;
