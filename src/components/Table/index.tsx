import { Body } from './Body';
import { TableHeader } from './TableHeader';

import { TableProps } from './types';

import styles from './style.module.scss';

export const Table = ({ dataSource, columns }: TableProps) => {
  return (
    <table className={styles.table} data-cy="table">
      <TableHeader columns={columns} />
      <Body dataSource={dataSource} columns={columns} />
    </table>
  );
};
