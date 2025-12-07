'use client';
import {
  Box,
  Text,
  Input,
  Radio,
  Button,
  HStack,
  VStack,
  Checkbox,
  useToast,
  FormLabel,
  RadioGroup,
  FormControl,
  CheckboxGroup,
  FormErrorMessage,
} from '@chakra-ui/react';
import { useState } from 'react';

import SectionWrapper from 'components/SectionWrapper';
import { validate } from './utils';
import {
  attendanceOptions,
  dishesOptions,
  initialState,
  drinkOptions,
  errorState,
} from './constants';

const GuestForm = () => {
  const toast = useToast({ position: 'bottom-right' });
  const [errors, setErrors] = useState(errorState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formValues, setFormValues] = useState(initialState);

  const isSubmitDisabled = isSubmitting || Object.values(errors).some(Boolean);

  const handleChange = (key, value) => {
    setFormValues(prev => ({ ...prev, [key]: value }));
    setErrors(prev => ({ ...prev, [key]: '' }));
  };

  const handleSubmit = async event => {
    event.preventDefault();

    const validationErrors = validate(formValues);
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      toast({ status: 'error', title: 'Нужно заполнить обязательные поля' });
      return;
    }
    const transformedFormValues = { ...formValues, drinks: formValues.drinks.join(', ') };

    setIsSubmitting(true);
    const sendRequest = async () => {
      const response = await fetch('/api/guest-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(transformedFormValues),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data?.message || 'Не удалось отправить анкету');

      return data;
    };

    try {
      const submissionPromise = sendRequest();

      toast.promise(submissionPromise, {
        loading: { title: 'Отправляем анкету...' },
        success: { title: 'Спасибо! Анкета отправлена.' },
        error: error => ({
          title: 'Ошибка отправки',
          description: error.message || 'Попробуйте ещё раз чуть позже.',
        }),
      });

      await submissionPromise;
      setFormValues(initialState);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionWrapper id="guest-form">
      <Box
        as="form"
        onSubmit={handleSubmit}
        w="full"
        maxW="720px"
        px={{ mobile: '18px', laptop: '32px' }}
        py={{ mobile: '22px', laptop: '32px' }}
        borderRadius={{ mobile: '18px', laptop: '24px' }}
        bg="rgba(20, 12, 64, 0.03)"
        border="1px solid"
        borderColor="ourGray"
        boxShadow="0 20px 40px rgba(20, 12, 64, 0.08)"
      >
        <VStack align="stretch" gap={{ mobile: '16px', laptop: '22px' }}>
          <VStack gap="6px" textAlign="center">
            <Text
              fontSize={{ mobile: '20px', laptop: '24px' }}
              letterSpacing="2px"
              textTransform="uppercase"
              color="ourBlack"
            >
              Анкета гостя
            </Text>

            <Text
              maxW={{ mobile: '350px', tablet: '400px', laptop: '440px' }}
              fontSize={{ mobile: '14px', laptop: '16px' }}
              color="rgba(20, 12, 64, 0.7)"
            >
              Ваши ответы помогут нам подготовить праздник. Будем ждать ответ до 01.02.2026
            </Text>
          </VStack>

          <FormControl isInvalid={Boolean(errors.name)}>
            <FormLabel mb="6px">Имя и фамилия</FormLabel>

            <Input
              value={formValues.name}
              placeholder="Напишите имя и фамилию"
              bg="white"
              borderColor={errors.name ? 'ourAccent' : 'ourGray'}
              _hover={{ borderColor: 'ourAccent' }}
              _focusVisible={{ borderColor: 'ourAccent', boxShadow: '0 0 0 1px #DB7093' }}
              onChange={event => handleChange('name', event.target.value)}
            />

            <FormErrorMessage>{errors.name}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={Boolean(errors.attendance)}>
            <FormLabel mb="6px">Сможете ли вы присутствовать на торжестве?</FormLabel>

            <RadioGroup
              value={formValues.attendance}
              colorScheme="pink"
              onChange={value => handleChange('attendance', value)}
            >
              <VStack align="start" spacing="8px">
                {attendanceOptions.map(value => (
                  <Radio key={value} value={value}>
                    {value}
                  </Radio>
                ))}
              </VStack>
            </RadioGroup>

            <FormErrorMessage>{errors.attendance}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={Boolean(errors.drinks)}>
            <FormLabel mb="6px">Предпочтения по напиткам:</FormLabel>

            <CheckboxGroup
              value={formValues.drinks}
              colorScheme="pink"
              onChange={value => handleChange('drinks', value)}
            >
              <VStack align="start" gap="8px">
                {drinkOptions.map(label => (
                  <Checkbox key={label} value={label}>
                    {label}
                  </Checkbox>
                ))}
              </VStack>
            </CheckboxGroup>

            <FormErrorMessage>{errors.drinks}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={Boolean(errors.dishes)}>
            <FormLabel mb="6px">Предпочтения по горячему:</FormLabel>

            <RadioGroup
              value={formValues.dishes}
              onChange={value => handleChange('dishes', value)}
              colorScheme="pink"
            >
              <VStack align="start" gap="8px">
                {dishesOptions.map(value => (
                  <Radio key={value} value={value}>
                    {value}
                  </Radio>
                ))}
              </VStack>
            </RadioGroup>

            <FormErrorMessage>{errors.drinks}</FormErrorMessage>
          </FormControl>

          <HStack justify="center">
            <Button
              type="submit"
              isDisabled={isSubmitDisabled}
              bg="ourAccent"
              color="white"
              borderRadius="10px"
              px="36px"
              _hover={{ bg: '#c75f82' }}
              _disabled={{ bg: 'ourGray', color: 'rgba(20, 12, 64, 0.6)' }}
            >
              Отправить
            </Button>
          </HStack>
        </VStack>
      </Box>
    </SectionWrapper>
  );
};

export default GuestForm;
