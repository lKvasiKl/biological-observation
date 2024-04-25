import { useEffect, useState } from 'react';
import { mapBiomToBacteriaRows } from 'utils/biomMapper';
import { BacteriaTable } from 'components/BacteriaTable';
import { BacteriaSearchBar } from 'components/BacteriaSearchBar';
import { BacteriaTableRowData } from 'types';
import biomObject from 'data/biom.json';
import {
  formatAbundanceScoreCell,
  formatRelativeAbundanceCell,
} from 'utils/tableCellFormatter';

import styles from './style.module.scss';

export const App = () => {
  const [filteredData, setFilteredData] = useState<BacteriaTableRowData[]>([]);
  const [initialData, setInitialData] = useState<BacteriaTableRowData[]>([]);

  useEffect(() => {
    const data = mapBiomToBacteriaRows(biomObject);

    const formattedData = data.map((item) => ({
      ...item,
      relativeAbundance: formatRelativeAbundanceCell(item.relativeAbundance),
      abundanceScore: formatAbundanceScoreCell(item.abundanceScore),
    }));

    setInitialData(formattedData);
  }, []);

  return (
    <div className={styles.container}>
      <BacteriaSearchBar
        data={initialData}
        onFilteredDataChange={setFilteredData}
      />
      <div className={styles.tableContainer}>
        <BacteriaTable data={filteredData || initialData} />
      </div>
    </div>
  );
};
