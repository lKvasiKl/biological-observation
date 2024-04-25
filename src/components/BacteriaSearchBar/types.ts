import { BacteriaTableRowData } from 'types';

export interface BacteriaSearchBarProps {
  data: BacteriaTableRowData[];
  onFilteredDataChange: (filteredData: BacteriaTableRowData[]) => void;
}
