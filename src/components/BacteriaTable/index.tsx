import { Table } from 'components/Table';

import { BacteriaTableProps } from './types';
import { COLUMN_HEADER_CONFIG } from './config';

export const BacteriaTable = ({ data }: BacteriaTableProps) => {
  return <Table dataSource={data} columns={COLUMN_HEADER_CONFIG} />;
};
