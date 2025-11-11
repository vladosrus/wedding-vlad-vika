const EVENT_DATE_MS = new Date('2026-07-25T15:00:00+03:00').getTime();

export const pluralize = (amount, arr) => {
  const suffixes = new Map([
    ['one', arr[0]],
    ['few', arr[1]],
    ['many', arr[2]],
  ]);

  const rule = new Intl.PluralRules('ru').select(amount);
  const suffix = suffixes.get(rule);
  return suffix;
};

export const getTimeLeft = () => {
  const totalMs = Math.max(EVENT_DATE_MS - Date.now(), 0);
  const totalSeconds = Math.floor(totalMs / 1000);

  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds };
};
