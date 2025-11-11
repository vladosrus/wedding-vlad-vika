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

      <Text fontSize={{ mobile: '22px', laptop: '32px' }} lineHeight="132%" textAlign="center">
        {'Дорогие гости, будем очень Вас ждать <3'}
      </Text>

      <CustomDivider />
    </VStack>
  </SectionWrapper>
);

export default TextGreetings;
