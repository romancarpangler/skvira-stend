export const number = x => {
  switch (x) {
    case '01':
      return 1;
    case '02':
      return 2;
    case '03':
      return 3;
    case '04':
      return 4;
    case '05':
      return 5;
    case '06':
      return 6;
    case '07':
      return 7;
    case '08':
      return 8;
    case '09':
      return 9;
    default:
      return Number(x);
  }
};
