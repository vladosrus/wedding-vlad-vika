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
        maxW="480px"
        px={{ mobile: '18px', laptop: '26px' }}
        py={{ mobile: '24px', laptop: '30px' }}
        borderRadius="20px"
        bgGradient="linear-gradient(145deg, #1b1b1f, #18181c)"
        color="white"
        boxShadow="0 10px 35px rgba(0,0,0,0.4)"
        border="1px solid #24242a"
      >
        <VStack align="stretch" gap={{ mobile: '14px', laptop: '18px' }}>
          <VStack gap="4px">
            <Text
              fontSize={{ mobile: '20px', laptop: '24px' }}
              letterSpacing="3px"
              textTransform="uppercase"
            >
              Анкета гостя
            </Text>

            <Text fontSize="14px" color="whiteAlpha.700" textAlign="center">
              Ваши ответы помогут нам подготовить праздник. Будем ждать ответ до 01.11.2025.
            </Text>
          </VStack>

          <FormControl isInvalid={Boolean(errors.name)}>
            <FormLabel mb="6px">Имя и фамилия</FormLabel>

            <Input
              value={formValues.name}
              placeholder="Напишите имя и фамилию"
              bg="#0f0f12"
              borderColor={errors.name ? 'ourAccent' : '#2f2f36'}
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
              bg="white"
              color="ourBlack"
              borderRadius="10px"
              px="36px"
              _hover={{ bg: 'whiteAlpha.900' }}
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
