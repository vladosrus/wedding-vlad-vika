'use client';
import { useEffect, useState } from 'react';
import { Flex, SimpleGrid, Text, VStack } from '@chakra-ui/react';

import NextImage from 'components/NextImage';
import SectionWrapper from 'components/SectionWrapper';
import { getTimeLeft, pluralize } from './utils';

import Illustration from 'assets/illustrations/vladAndVika.jpg';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft), 1000);
    return () => clearInterval(timer);
  }, []);

  const countdownItems = [
    { labels: ['день', 'дня', 'дней'], value: timeLeft.days },
    { labels: ['час', 'часа', 'часов'], value: timeLeft.hours },
    { labels: ['минута', 'минуты', 'минут'], value: timeLeft.minutes },
    { labels: ['секунда', 'секунды', 'секунд'], value: timeLeft.seconds },
  ];

  return (
    <SectionWrapper>
      <VStack
        w="full"
        maxW={{ mobile: '500px', laptop: '900px' }}
        gap={{ mobile: '20px', laptop: '32px' }}
        bg="rgba(20, 12, 64, 0.04)"
        borderRadius="28px"
        p={{ mobile: '28px 18px 18px', laptop: '42px 48px 48px' }}
      >
        <Text
          as="h2"
          fontSize={{ mobile: '19px', laptop: '32px' }}
          letterSpacing="6px"
          textTransform="uppercase"
          textAlign="center"
        >
          До торжества осталось:
        </Text>

        <SimpleGrid
          w="full"
          columns={{ mobile: 2, xms: 4 }}
          gap={{ mobile: '18px', laptop: '32px' }}
        >
          {countdownItems.map(({ labels, value }) => (
            <VStack key={labels[0]} gap="8px" textAlign="center">
              <Text fontSize={{ mobile: '32px', tablet: '40px', laptop: '72px' }}>
                {String(value).padStart(2, '0')}
              </Text>

              <Text
                fontSize={{ mobile: '10px', tablet: '14px', laptop: '18px' }}
                letterSpacing="4px"
                textTransform="uppercase"
              >
                {pluralize(value, labels)}
              </Text>
            </VStack>
          ))}
        </SimpleGrid>

        <Flex
          w="full"
          maxW={{ laptop: '700px' }}
          borderRadius={{ mobile: '18px', laptop: '28px' }}
          overflow="hidden"
        >
          <NextImage src={Illustration} alt="Иллюстрация" w="full" h="full" quality="75" />
        </Flex>
      </VStack>
    </SectionWrapper>
  );
};

export default Countdown;
