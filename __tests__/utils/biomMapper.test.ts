import {
  createBacteriaRow,
  mapBiomToBacteriaRows,
  mapDataToBacteriaRows,
} from 'utils/biomMapper';
import { BacteriaTableRowData } from 'types';

import testBiomObject from '../fixtures/testBiomData.json';

const { data, rows } = testBiomObject;
let bacteriaTableRowDataResult: BacteriaTableRowData[] = [];

const EXPECTED_OUTPUT = [
  {
    name: 'Lactobacillus crispatus SJ-3C-US',
    taxId: 575598,
  },
  {
    name: 'Lactobacillus sp. UMNPBX1',
    taxId: 2042046,
  },
];
const FINAL_EXPECTED_OUTPUT = [
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
];

describe('createBacteriaRow', () => {
  test('should create bacteria row objects with name and taxId from BiomRow', () => {
    bacteriaTableRowDataResult = rows.map((row) => createBacteriaRow(row));

    expect(bacteriaTableRowDataResult).toEqual(EXPECTED_OUTPUT);
  });
});

describe('mapDataToBacteriaRows', () => {
  test('should map data from BiomRowData to bacteriaTableRowData', () => {
    mapDataToBacteriaRows(data, bacteriaTableRowDataResult);

    expect(bacteriaTableRowDataResult).toEqual(FINAL_EXPECTED_OUTPUT);
  });
});

describe('mapBiomToBacteriaRows', () => {
  it('maps Biom data to BacteriaTableRowData correctly', () => {
    const result = mapBiomToBacteriaRows(testBiomObject);

    expect(result).toEqual(FINAL_EXPECTED_OUTPUT);
  });
});
