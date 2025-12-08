'use client';
import { Text, VStack } from '@chakra-ui/react';

import SectionWrapper from 'components/SectionWrapper';
import YandexMap from './YandexMap';
import FaqItem from './FaqItem';

const faqItemsData = [
  {
    question: 'Что подарить?',
    answer:
      'Ваше присутствие — лучший подарок. Но если душа просит материального жеста, мы будем рады вкладу в наше семейное гнездышко.',
  },
  {
    question: 'Дарить ли цветы?',
    answer:
      'Лучшие цветы на свадьбу — это подписка, которая будет радовать нас целый год! Перейдите по ссылке и Вы попадете на страницу с подробной инструкцией.',
    isBtnVisible: true,
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
        {faqItemsData.map(faqItemData => (
          <FaqItem key={faqItemData.question} {...faqItemData} />
        ))}

        <YandexMap />
      </VStack>
    </VStack>
  </SectionWrapper>
);

export default FAQ;
