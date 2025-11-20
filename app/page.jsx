import { Box } from '@chakra-ui/react';

import Countdown from 'components/Countdown';
import EventPlan from 'components/EventPlan';
import Greetings from 'components/Greetings';
import MusicToggle from 'components/MusicToggle';
import TextGreetings from 'components/TextGreetings';

export default function Home() {
  return (
    <Box as="main" py="28px">
      <Greetings />
      <TextGreetings />
      <Countdown />
      <EventPlan />

      <MusicToggle />
    </Box>
  );
}
