import { TableBodyProps } from '../types';

export const Body = ({ dataSource, columns }: TableBodyProps) => {
  return (
    <tbody data-cy="table-body">
      {dataSource.map((item, index) => (
        <tr key={index}>
          {columns.map(({ name }, index) => (
            <td key={index}>{item[name]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};
