import { VStack } from '@chakra-ui/react';

import FAQ from 'components/FAQ';
import Countdown from 'components/Countdown';
import EventPlan from 'components/EventPlan';
import Greetings from 'components/Greetings';
import LooksSlider from 'components/LooksSlider';
import MusicToggle from 'components/MusicToggle';
import TextGreetings from 'components/TextGreetings';
import BlocksDivider from 'components/BlocksDivider';

export default function Home() {
  return (
    <VStack as="main" py="28px" gap="0">
      <Greetings />
      <TextGreetings />
      <Countdown />
      <BlocksDivider />
      <EventPlan />
      <BlocksDivider />
      <LooksSlider />
      <BlocksDivider />
      <FAQ />

      <MusicToggle />
    </VStack>
  );
}
