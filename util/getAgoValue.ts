import { differenceInMinutes, minutesToHours } from 'date-fns';

export default (beforeDate: Date, laterDate: Date) => {
  let time = 0;
  let unit = 'minutos';
  const minutes = differenceInMinutes(laterDate, beforeDate);
  const timeInHours = minutesToHours(minutes);
  if (timeInHours >= 1) {
    timeInHours > 1 ? (unit = 'horas') : (unit = 'hora');
    time = timeInHours;
  } else {
    minutes > 1 ? (unit = 'minutos') : (unit = 'minuto');
    time = minutes;
  }
  if (timeInHours > 24) {
    timeInHours >= 48 ? (unit = 'dias') : (unit = 'dia');
    time = Math.floor(timeInHours / 24);
  }
  return `há ${time} ${unit}`;
};
