import { Box, Text, VStack } from '@chakra-ui/react';

const TextGreetings = () => (
  <VStack
    as="section"
    w="full"
    align="center"
    p={{ mobile: '14px 16px', laptop: '28px 32px' }}
    gap={{ mobile: '24px', laptop: '32px' }}
  >
    <Box w="140px" h="1px" bg="ourBlack" />

    <Text fontSize={{ mobile: '22px', laptop: '32px' }} lineHeight="132%" textAlign="center">
      {'Дорогие гости, будем очень Вас ждать <3'}
    </Text>

    <Box w="140px" h="1px" bg="ourBlack" />
  </VStack>
);

export default TextGreetings;
