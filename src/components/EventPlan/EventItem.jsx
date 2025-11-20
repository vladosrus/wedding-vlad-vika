'use client';
import { memo } from 'react';
import { motion } from 'framer-motion';
import { Flex, Text, VStack } from '@chakra-ui/react';

import NextImage from 'components/NextImage';

const EventItem = ({ index, date, time, timeNote = null, title, description, image }) => (
  <motion.div
    initial={{ opacity: 0, y: 25 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
    style={{ width: '100%' }}
  >
    <Flex
      direction={{ mobile: 'column', md: 'row' }}
      gap={{ mobile: '18px', laptop: '32px' }}
      p={{ mobile: '14px', laptop: '18px 20px' }}
      border="1px solid rgba(20, 12, 64, 0.08)"
      borderRadius="18px"
      bg="white"
      boxShadow="0 4px 18px rgba(20, 12, 64, 0.04)"
      align={{ mobile: 'stretch', laptop: 'center' }}
    >
      <VStack w={{ mobile: '110px', laptop: '120px' }} gap="4px" align="flex-start">
        <Text
          fontSize={{ mobile: '12px', laptop: '14px' }}
          textTransform="uppercase"
          letterSpacing="1.2px"
          color="rgba(20, 12, 64, 0.7)"
        >
          {date}
        </Text>

        <Text fontSize={{ mobile: '22px', laptop: '26px' }} color="ourAccent">
          {time}
        </Text>

        {timeNote && (
          <Text fontSize={{ mobile: '12px', laptop: '13px' }} color="rgba(20, 12, 64, 0.7)">
            {timeNote}
          </Text>
        )}
      </VStack>

      <Flex
        w="full"
        maxW={{ md: '240px' }}
        h={{ mobile: '180px', md: '140px' }}
        borderRadius="14px"
        overflow="hidden"
        flexShrink="0"
      >
        <NextImage src={image} alt={title} w="full" h="full" />
      </Flex>

      <VStack align="flex-start" spacing="8px" flex="1">
        <Text as="h3" fontSize={{ mobile: '18px', laptop: '22px' }}>
          {title}
        </Text>

        <Text
          fontSize={{ mobile: '14px', laptop: '16px' }}
          lineHeight="150%"
          color="rgba(20, 12, 64, 0.82)"
        >
          {description}
        </Text>
      </VStack>
    </Flex>
  </motion.div>
);

export default memo(EventItem);
