import { BacteriaTableRowData, BiomData, BiomRow, BiomRowData } from 'types';

const LINEAGE_LEVEL = 7;
const FIELD_TYPE_MAP: {
  [index: number]: string;
} = {
  0: 'relativeAbundance',
  1: 'abundanceScore',
  2: 'uniqueMatchesFrequency',
};

export const mapBiomToBacteriaRows = (
  biomObject: BiomData,
): BacteriaTableRowData[] => {
  let bacteriaTableRowData: BacteriaTableRowData[] = [];

  const { data, rows } = biomObject;

  for (let i = 0; i < rows.length; i++) {
    bacteriaTableRowData.push(createBacteriaRow(rows[i]));
  }

  bacteriaTableRowData = mapDataToBacteriaRows(data, bacteriaTableRowData);

  return bacteriaTableRowData;
};

const createBacteriaRow = (row: BiomRow): BacteriaTableRowData => {
  return {
    name: row.metadata.lineage[LINEAGE_LEVEL].name,
    taxId: row.metadata.lineage[LINEAGE_LEVEL].tax_id,
  };
};

const mapDataToBacteriaRows = (
  data: BiomRowData,
  bacteriaTableRowData: BacteriaTableRowData[],
): BacteriaTableRowData[] => {
  for (const [rowIndex, fieldType, fieldValue] of data) {
    const field = FIELD_TYPE_MAP[fieldType];

    bacteriaTableRowData[rowIndex] = {
      ...bacteriaTableRowData[rowIndex],
      [field]: fieldValue,
    };
  }

  return bacteriaTableRowData;
};
