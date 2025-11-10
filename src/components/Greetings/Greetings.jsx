import { Box, Flex, HStack, ListItem, Text, UnorderedList, VStack } from '@chakra-ui/react';
import NextImage from 'components/NextImage';

import PurpleStar from 'assets/icons/purpleStar.svg';
import Illustration from '../../../app/opengraph-image.jpg';
import CustomOverlayLink from 'components/CustomOverlayLink';

const navButtonsData = [
  { text: 'План мероприятия', link: '#' },
  { text: 'Вопрос-ответ', link: '#' },
  { text: 'Подарки', link: '#' },
];

const Greetings = () => (
  <Flex as="section" w="full" justify="center" p={{ mobile: '0 16px 14px', laptop: '0 32px 28px' }}>
    <VStack w="full" maxW="1200px" gap={{ mobile: '12px', laptop: '18px' }}>
      <Text fontSize="16px" letterSpacing="3.2px" textTransform="uppercase" textAlign="center">
        Свадебная церемония
      </Text>

      <Text as="h1" fontSize={{ mobile: '32px', laptop: '62px' }} textAlign="center">
        Владислав & Виктория
      </Text>

      <HStack fontSize="16px" gap="8px">
        <Text textAlign="end">Санкт-Петербург</Text>

        <NextImage src={PurpleStar} alt="Розовая звёздочка" w="28px" h="28px" quality="75" />

        <Text>22/07/2026 и 25/07/2026</Text>
      </HStack>

      <Flex w="full" my="14px" borderRadius={{ mobile: '18px', laptop: '28px' }} overflow="hidden">
        <NextImage src={Illustration} alt="Иллюстрация" w="full" h="full" quality="75" />
      </Flex>

      <Box as="nav">
        <HStack
          as={UnorderedList}
          listStyleType="none"
          gap={{ mobile: '10px', laptop: '16px' }}
          m="0"
          wrap="wrap"
          justify="center"
        >
          {navButtonsData.map(({ text, link }, i) => (
            <ListItem
              key={`nav-link-${i}`}
              pos="relative"
              color="white"
              p="10px 16px"
              borderRadius="full"
              bg="ourAccent"
              transition="transform .3s"
              _hover={{ laptop: { transform: 'scale(0.95)' } }}
            >
              <CustomOverlayLink title={text} link={link} />
              <Text fontSize={{ mobile: '12px', laptop: '16px' }}>{text}</Text>
            </ListItem>
          ))}
        </HStack>
      </Box>
    </VStack>
  </Flex>
);

export default Greetings;
