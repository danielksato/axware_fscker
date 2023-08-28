import { Rows } from '../const';

const { RAW_TIME, PAX_TIME, PAX_FACTOR, DRIVER, CAR, CLASS, CLASS_POS } = Rows;

const paxFactor = (factor: string): number =>
  parseFloat(/[\d.]+/.exec(factor)?.[0] || '');

export const mapRow = (
  row: string[],
): { original: string | number; hypothetical: string | number }[] => {
  return row
    .map((val, i) => {
      switch (i) {
        case PAX_FACTOR:
          return paxFactor(val);
        case RAW_TIME:
          if (val !== row[PAX_TIME]) {
            return parseFloat(row[PAX_TIME]) / paxFactor(row[PAX_FACTOR]);
          } else {
            return parseFloat(val);
          }
        case DRIVER:
        case CAR:
        case CLASS:
          return val;
        default:
          return parseFloat(val);
      }
    })
    .map((original) => ({ original, hypothetical: original }));
};

export const displayNum = (val: number | string): number | string => {
  if (typeof val === 'string') {
    return val;
  }
  return val % 1 ? val.toFixed(3) : val;
};

export const headingMap = {
  [RAW_TIME]: 'Raw Time',
  [PAX_FACTOR]: 'PAX',
  [CLASS_POS]: 'Class Pos.',
};
