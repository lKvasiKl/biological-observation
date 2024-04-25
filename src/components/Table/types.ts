export type TableRowData = {
  [key: string]: any;
};

export type TableColumn = {
  name: string;
  title?: string;
};

export type TableProps = {
  columns: TableColumn[];
  dataSource: TableRowData[];
};

export type TableHeaderProps = Pick<TableProps, 'columns'>;
export type TableBodyProps = Pick<TableProps, 'dataSource' | 'columns'>;
