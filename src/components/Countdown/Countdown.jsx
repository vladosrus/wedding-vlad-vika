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
        maxW={{ mobile: '500px', laptop: '900px' }}
        gap={{ mobile: '20px', laptop: '32px' }}
        bg="rgba(20, 12, 64, 0.04)"
        borderRadius="28px"
        p={{ mobile: '28px 18px 18px', laptop: '42px' }}
      >
        <Text
          as="h2"
          fontSize={{ mobile: '13px', tablet: '19px', laptop: '30px' }}
          letterSpacing="2px"
          textTransform="uppercase"
          textAlign="center"
        >
          До торжества осталось:
        </Text>

        <SimpleGrid
          w="full"
          columns={{ mobile: 2, smallMobile: 4 }}
          gap={{ mobile: '10px', laptop: '32px' }}
        >
          {countdownItems.map(({ labels, value }) => (
            <VStack key={labels[0]} gap="0" textAlign="center">
              <Text fontSize={{ mobile: '32px', tablet: '40px', laptop: '60px' }}>
                {String(value).padStart(2, '0')}
              </Text>

              <Text fontSize={{ mobile: '10px', laptop: '15px' }} textTransform="uppercase">
                {pluralize(value, labels)}
              </Text>
            </VStack>
          ))}
        </SimpleGrid>

        <Flex
          w="full"
          maxW={{ smallMobile: '260px', tablet: '360px', laptop: '520px' }}
          borderRadius={{ mobile: '18px', laptop: '28px' }}
          overflow="hidden"
        >
          <NextImage src={Illustration} alt="Иллюстрация" w="full" h="full" />
        </Flex>
      </VStack>
    </SectionWrapper>
  );
};

export default Countdown;
