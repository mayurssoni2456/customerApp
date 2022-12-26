import { setDate, format, subYears, addYears, setMonth, setHours } from 'date-fns';
import * as request from 'supertest';
import Server from "../../server";

describe('events', () => {
  beforeAll(() => {
    return Server.init();
  });

  const date1 = format(subYears(new Date(), 1), 'yyyy');
  const date2 = format(addYears(new Date(), 1), 'yyyy');
  
  const time1 = setDate(setMonth(subYears(new Date(), 1), 1), 21);
  const time2 = addYears(new Date(), 1);
  const month21 = setMonth(time2, 9);
  const month22 = setMonth(time2, 10);
  const month23 = setMonth(time2, 8);
  const month24 = setMonth(time2, 11);

  console.log(month21);
  console.log(month22);
  console.log(month23);
  console.log(month24);

  const setHoursAndFormat = (date: Date, hours = 1) => {
    return format(setHours(date, hours), 'yyyy-mm-dd hh:mm:ss');
  };

  console.log(setHoursAndFormat(time1, 10));
  console.log(setHoursAndFormat(time1, 16));

  console.log(setHoursAndFormat(month21, 10));
  console.log(setHoursAndFormat(month21, 16));

  console.log(setHoursAndFormat(month22, 10));
  console.log(setHoursAndFormat(month22, 17));

  console.log(setHoursAndFormat(month23, 10));
  console.log(setHoursAndFormat(month23, 18));


  afterAll(() => {
    return Server.close();
  });
});
