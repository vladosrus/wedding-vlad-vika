'use client';
import { Box, HStack, Text, VStack } from '@chakra-ui/react';

import SectionWrapper from 'components/SectionWrapper';
import NextImage from 'components/NextImage';

import PurpleStar from 'assets/icons/purpleStar.svg';

const faqs = [
  {
    question: 'Что подарить?',
    answer:
      'Ваше присутствие — лучший подарок. Но если душа просит материального жеста, мы будем рады вкладу в наше семейное гнездышко.',
  },
  {
    question: 'Дарить ли цветы?',
    answer:
      'Лучшие цветы на свадьбу — это подписка, которая будет радовать нас целый год! Отсканируете qr-код и Вы попадете на страницу с подробной инструкцией.',
  },
];

const FAQ = () => (
  <SectionWrapper id="faq">
    <VStack w="full" maxW="800px" gap={{ mobile: '18px', laptop: '24px' }}>
      <Text as="h2" fontSize={{ mobile: '26px', laptop: '36px' }} textAlign="center">
        Вопрос-ответ
      </Text>

      <VStack
        w="full"
        align="stretch"
        bg="rgba(20, 12, 64, 0.03)"
        borderRadius={{ mobile: '20px', laptop: '24px' }}
        p={{ mobile: '20px 14px', tablet: '24px 16px', laptop: '32px 22px' }}
        border="1px solid"
        borderColor="ourGray"
        gap={{ mobile: '20px', tablet: '26px', laptop: '32px' }}
      >
        {faqs.map(({ question, answer }) => (
          <Box
            key={question}
            _notLast={{
              borderBottom: '1px solid rgba(20, 12, 64, 0.12)',
              pb: { mobile: '12px', tablet: '16px', laptop: '16px' },
            }}
          >
            <HStack align="flex-start" gap={{ mobile: '16px', tablet: '20px', laptop: '28px' }}>
              <NextImage
                src={PurpleStar}
                alt="Розовая звёздочка"
                w="auto"
                h="auto"
                boxSize={{ mobile: '24px', tablet: '26px', laptop: '28px' }}
              />

              <VStack align="start" gap={{ mobile: '10px', tablet: '12px', laptop: '16px' }}>
                <Text
                  as="h3"
                  fontSize={{ mobile: '20px', tablet: '22px', laptop: '24px' }}
                  lineHeight="130%"
                  fontWeight="700"
                >
                  {question}
                </Text>

                <Text fontSize={{ mobile: '14px', laptop: '16px' }} lineHeight="150%">
                  {answer}
                </Text>
              </VStack>
            </HStack>
          </Box>
        ))}
      </VStack>
    </VStack>
  </SectionWrapper>
);

export default FAQ;
