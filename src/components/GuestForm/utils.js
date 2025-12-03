export const validate = values => {
  const nextErrors = {};

  const trimmedName = values.name.trim();
  const fullNamePattern =
    /^[A-Za-zА-Яа-яЁё]+(?:[-'][A-Za-zА-Яа-яЁё]+)*\s+[A-Za-zА-Яа-яЁё]+(?:[-'][A-Za-zА-Яа-яЁё]+)*$/;

  if (!trimmedName) {
    nextErrors.name = 'Введите имя и фамилию';
  } else if (!fullNamePattern.test(trimmedName)) {
    nextErrors.name = 'Укажите имя и фамилию через пробел';
  }

  if (!values.attendance) nextErrors.attendance = 'Отметьте свой статус';
  if (!(values.drinks.length > 0)) nextErrors.drinks = 'Укажите свои предпочтения';
  if (!values.dishes) nextErrors.dishes = 'Укажите свои предпочтения';

  return nextErrors;
};
