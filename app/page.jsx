import { Box } from '@chakra-ui/react';

import Greetings from 'components/Greetings';
import TextGreetings from 'components/TextGreetings';

export default function Home() {
  return (
    <Box as="main" py="28px">
      <Greetings />

      <TextGreetings />
    </Box>
  );
}
