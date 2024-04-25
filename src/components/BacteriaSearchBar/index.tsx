import React, { useEffect, useState } from 'react';

import { SearchBar } from 'components/SearchBar';
import { InputChangeEvent } from 'types';

import { INPUT_PLACEHOLDER } from './config';
import { BacteriaSearchBarProps } from './types';

export const BacteriaSearchBar = React.memo(
  ({ data, onFilteredDataChange }: BacteriaSearchBarProps) => {
    const [searchQuery, setSearchQuery] = useState<string>('');

    useEffect(() => {
      const filteredBiomData = data.filter((item) =>
        item.name?.toLowerCase().includes(searchQuery.toLowerCase()),
      );

      onFilteredDataChange(filteredBiomData);
    }, [data, searchQuery, onFilteredDataChange]);

    const handleSearchInputChange = (event: InputChangeEvent) => {
      setSearchQuery(event.target.value);
    };

    return (
      <SearchBar
        onInputChange={handleSearchInputChange}
        placeholder={INPUT_PLACEHOLDER}
      />
    );
  },
);
