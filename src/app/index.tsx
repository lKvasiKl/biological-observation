import { useEffect, useState } from 'react';

import { mapBiomToBacteriaRows } from 'utils/biomMapper';
import { BacteriaTable } from 'components/BacteriaTable';
import { BacteriaTableRowData } from 'types';
import biomObject from 'data/biom.json';
import {
  formatAbundanceScoreCell,
  formatRelativeAbundanceCell,
} from 'utils/tableCellFormatter';

import styles from './style.module.scss';

export const App = () => {
  const [formattedData, setFormattedData] = useState<BacteriaTableRowData[]>(
    [],
  );

  useEffect(() => {
    const data = mapBiomToBacteriaRows(biomObject);
    const formatted = data.map((item) => ({
      ...item,
      relativeAbundance: formatRelativeAbundanceCell(item.relativeAbundance),
      abundanceScore: formatAbundanceScoreCell(item.abundanceScore),
    }));

    setFormattedData(formatted);
  }, []);

  return (
    <div className={styles.tableContainer}>
      <BacteriaTable data={formattedData} />
    </div>
  );
};
