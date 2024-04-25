import {
  formatRelativeAbundanceCell,
  formatAbundanceScoreCell,
} from 'utils/tableCellFormatter';

const TEST_DATA = [
  {
    name: 'Lactobacillus crispatus SJ-3C-US',
    taxId: 575598,
    relativeAbundance: 0.944307,
    abundanceScore: 139028.29,
    uniqueMatchesFrequency: 1362.0,
  },
  {
    name: 'Lactobacillus sp. UMNPBX1',
    taxId: 2042046,
    relativeAbundance: 0.026278,
    abundanceScore: 3868.86,
    uniqueMatchesFrequency: 3188.0,
  },
  {
    name: 'Lactobacillus kefiranofaciens ZW3',
    taxId: 1033837,
    relativeAbundance: 0.000022,
    abundanceScore: 3.29,
    uniqueMatchesFrequency: 2,
  },
];

describe('formatRelativeAbundanceCell', () => {
  it('should return "< 0.01%" if relative abundance is less than MIN_RELATIVE_ABUNDANCE', () => {
    expect(formatRelativeAbundanceCell(TEST_DATA[2].relativeAbundance)).toBe(
      '< 0.01%',
    );
  });

  it('should return formatted percentage if relative abundance is greater than or equal to MIN_RELATIVE_ABUNDANCE', () => {
    expect(formatRelativeAbundanceCell(TEST_DATA[0].relativeAbundance)).toBe(
      '94.43%',
    );
    expect(formatRelativeAbundanceCell(TEST_DATA[1].relativeAbundance)).toBe(
      '2.63%',
    );
  });

  it('should return undefined if value is not a number', () => {
    expect(formatRelativeAbundanceCell('abc')).toBeUndefined();
    expect(formatRelativeAbundanceCell(undefined)).toBeUndefined();
  });
});

describe('formatAbundanceScoreCell', () => {
  it('should return formatted abundance score', () => {
    expect(formatAbundanceScoreCell(TEST_DATA[0].abundanceScore)).toBe(
      '139028.29',
    );
    expect(formatAbundanceScoreCell(TEST_DATA[1].abundanceScore)).toBe(
      '3868.86',
    );
    expect(formatAbundanceScoreCell(TEST_DATA[2].abundanceScore)).toBe('3.29');
  });

  it('should return undefined if value is not a number', () => {
    expect(formatAbundanceScoreCell('abc')).toBeUndefined();
    expect(formatAbundanceScoreCell(undefined)).toBeUndefined();
  });
});
