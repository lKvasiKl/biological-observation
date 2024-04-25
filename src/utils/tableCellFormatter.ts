import { AbundanceScoreData, RelativeAbundanceData } from 'types';

const MIN_RELATIVE_ABUNDANCE = 0.0001;
const PERCENT_MULTIPLIER = 100;
const DECIMALS = 2;

export const formatRelativeAbundanceCell = (value: RelativeAbundanceData) => {
  if (typeof value !== 'number' || isNaN(value)) return;

  if (value < MIN_RELATIVE_ABUNDANCE) {
    return '< 0.01%';
  } else {
    const percentage = (value * PERCENT_MULTIPLIER).toFixed(DECIMALS);
    return `${percentage}%`;
  }
};

export const formatAbundanceScoreCell = (value: AbundanceScoreData) => {
  if (typeof value !== 'number' || isNaN(value)) return;

  return value.toFixed(DECIMALS);
};
