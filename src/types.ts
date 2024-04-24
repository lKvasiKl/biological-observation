import biomObject from 'data/biom.json';

export type BiomData = typeof biomObject;
export type BiomRow = BiomData['rows'][number];
export type BiomRowData = BiomData['data'];

export interface BacteriaTableRowData {
  name?: string;
  taxId?: number;
  abundanceScore?: number;
  relativeAbundance?: number;
  uniqueMatchesFrequency?: number;
}
