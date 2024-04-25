import { TableHeaderProps } from '../types';

export const TableHeader = ({ columns }: TableHeaderProps) => {
  return (
    <thead>
      <tr>
        {columns.map(({ name, title }, index) => (
          <th key={index}>{title || name}</th>
        ))}
      </tr>
    </thead>
  );
};
