'use client';
import { useState } from 'react';
import { Input, VStack, useToast, FormControl, FormErrorMessage } from '@chakra-ui/react';

import CustomButton from 'components/CustomButton';

const fullNamePattern =
  /^[A-Za-zА-Яа-яЁё]+(?:[-'][A-Za-zА-Яа-яЁё]+)*\s+[A-Za-zА-Яа-яЁё]+(?:[-'][A-Za-zА-Яа-яЁё]+)*$/;

export const validate = value => {
  let validationError = '';

  if (!value) {
    validationError = 'Введите имя и фамилию';
  } else if (!fullNamePattern.test(value)) {
    validationError = 'Укажите имя и фамилию через пробел';
  }

  return validationError;
};

const Form = () => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast({ position: 'bottom-right' });

  const isSubmitDisabled = isSubmitting || Boolean(error);

  const handleChange = value => {
    setName(value);
    setError('');
  };

  const handleSubmit = async event => {
    event.preventDefault();

    const trimmedName = name.trim();
    const validationError = validate(trimmedName);
    if (validationError) {
      setError(validationError);
      toast({ status: 'error', title: 'Нужно заполнить обязательные поля' });
      return;
    }

    setIsSubmitting(true);
    const sendRequest = async () => {
      const response = await fetch('/api/easter-egg', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: trimmedName }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data?.message || 'Не удалось отправить данные формы');

      return data;
    };

    try {
      const submissionPromise = sendRequest();

      toast.promise(submissionPromise, {
        loading: { title: 'Отправляем данные...' },
        success: { title: 'Всё круто! Я получил твои данные' },
        error: error => ({
          title: 'Ошибка отправки',
          description: error.message || 'Попробуйте ещё раз чуть позже.',
        }),
      });

      await submissionPromise;
      setName('');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <VStack
      as="form"
      w="full"
      maxW="420px"
      bg="rgba(255,255,255,0.04)"
      border="1px solid rgba(255,255,255,0.08)"
      borderRadius="16px"
      p="18px"
      boxShadow="0 20px 45px rgba(0,0,0,0.35)"
      backdropFilter="blur(6px)"
      gap={isSubmitDisabled ? '8px' : '24px'}
      onSubmit={handleSubmit}
    >
      <FormControl isInvalid={Boolean(error)}>
        <Input
          value={name}
          placeholder="Имя и фамилия"
          bg="rgba(0,0,0,0.3)"
          borderColor={error ? 'red.300' : 'purple.300'}
          _hover={{ borderColor: 'purple.200' }}
          _focusVisible={{
            borderColor: 'purple.100',
            boxShadow: '0 0 0 1px rgba(191, 144, 255, 0.8)',
          }}
          color="white"
          onChange={event => handleChange(event.target.value)}
        />

        <FormErrorMessage>{error}</FormErrorMessage>
      </FormControl>

      <CustomButton
        text="Отправить и получить подарок"
        type="submit"
        isDisabled={isSubmitDisabled}
        maxW="unset"
        _hover={!isSubmitDisabled && { bg: '#c75f82' }}
        _disabled={{
          opacity: '0.5',
          pointerEvent: 'none',
          cursor: 'not-allowed',
        }}
      />
    </VStack>
  );
};

export default Form;
