import { render, screen } from '@testing-library/react';
import { Table } from 'components/Table';

const TEST_DATA = [
  {
    name: 'Lactobacillus crispatus SJ-3C-US',
    taxId: 575598,
    relativeAbundance: 0.944307,
    abundanceScore: 139028.29,
    uniqueMatchesFrequency: 1362.0,
  },
  {
    name: 'Lactobacillus sp. UMNPBX1',
    taxId: 2042046,
    relativeAbundance: 0.026278,
    abundanceScore: 3868.86,
    uniqueMatchesFrequency: 3188.0,
  },
  {
    name: 'Lactobacillus kefiranofaciens ZW3',
    taxId: 1033837,
    relativeAbundance: 0.000022,
    abundanceScore: 3.29,
    uniqueMatchesFrequency: 2,
  },
];

const COLUMN_HEADER_CONFIG = [
  {
    name: 'name',
    title: 'Name',
  },
  {
    name: 'taxId',
    title: 'Tax ID',
  },
  {
    name: 'abundanceScore',
    title: 'Abundance score',
  },
  {
    name: 'relativeAbundance',
    title: 'Relative abundance',
  },
  {
    name: 'uniqueMatchesFrequency',
    title: 'Unique matches frequency',
  },
];

describe('Table component', () => {
  test('Table renders correct with header and body data', () => {
    render(<Table dataSource={TEST_DATA} columns={COLUMN_HEADER_CONFIG} />);

    expect(screen.getByTestId('table')).toBeInTheDocument();
    expect(screen.getByTestId('table-header')).toBeInTheDocument();
    expect(screen.getByTestId('table-body')).toBeInTheDocument();
  });
});
