import React from 'react';

import { IMAGE_CONFIG } from './config';
import { SearchBarProps } from './types';

import styles from './style.module.scss';

export const SearchBar = React.memo(
  ({ placeholder, onInputChange }: SearchBarProps) => {
    return (
      <div className={styles.searchBarContainer} data-cy="search-bar">
        <input
          placeholder={placeholder}
          className={styles.searchBarContainer_input}
          onChange={onInputChange}
          data-cy="search-bar-input"
        />
        <img {...IMAGE_CONFIG} className={styles.searchBarContainer_image} />
      </div>
    );
  },
);
