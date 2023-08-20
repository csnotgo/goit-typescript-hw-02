/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Weekdays {
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
  Sun,
}

const isWeekend = (day: Weekdays): boolean => {
  if (day === Weekdays.Sat || day === Weekdays.Sun) {
    return true;
  }
  return false;
};
