import React from 'react';

import { TableHeaderProps } from '../types';

export const TableHeader = React.memo(({ columns }: TableHeaderProps) => {
  return (
    <thead data-cy="table-header">
      <tr>
        {columns.map(({ name, title }, index) => (
          <th key={index}>{title || name}</th>
        ))}
      </tr>
    </thead>
  );
});
