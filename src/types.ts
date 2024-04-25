import biomObject from 'data/biom.json';

export type BiomData = typeof biomObject;
export type BiomRow = BiomData['rows'][number];
export type BiomRowData = BiomData['data'];

export interface BacteriaTableRowData {
  name?: string;
  taxId?: number;
  abundanceScore?: string | number;
  relativeAbundance?: string | number;
  uniqueMatchesFrequency?: number;
}

export type AbundanceScoreData = BacteriaTableRowData['abundanceScore'];
export type RelativeAbundanceData = BacteriaTableRowData['relativeAbundance'];
