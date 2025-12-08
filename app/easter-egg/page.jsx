'use client';
import Link from 'next/link';
import { Button, Text, VStack } from '@chakra-ui/react';

import Form from './Form';

export default function EasterEgg() {
  return (
    <VStack
      w="100dvw"
      h="100dvh"
      bgGradient="linear(to-b, #0f0c29, #1b153f)"
      color="white"
      align="center"
      justify="center"
      px="20px"
      textAlign="center"
      gap="20px"
    >
      <VStack gap="14px">
        <Text
          fontSize={{ mobile: '12px', laptop: '14px' }}
          letterSpacing="2px"
          textTransform="uppercase"
          color="purple.200"
        >
          Ты нашёл тайный ход
        </Text>

        <Text
          fontSize={{ mobile: '20px', tablet: '28px', laptop: '34px' }}
          fontWeight="700"
          lineHeight="120%"
        >
          Привет! Я Влад 👋 <br />
          Создатель этого сайта 👨‍💻
        </Text>

        <Text fontSize={{ mobile: '16px', laptop: '18px' }} color="purple.100" lineHeight="160%">
          Ты нашёл пасхалку, которую я сделал 😊 <br />
          За внимательность тебя ждёт маленький подарок на свадьбе 🎁 <br />
          Оставь своё имя и фамилию, и на празднике я найду тебя среди гостей 😉
        </Text>
      </VStack>

      <Form />

      <Button as={Link} href="/" colorScheme="purple" borderColor="purple.200" color="purple.100">
        Вернуться на главную страницу
      </Button>
    </VStack>
  );
}
