import React from 'react';

import { IMAGE_CONFIG } from './config';
import { SearchBarProps } from './types';

import styles from './style.module.scss';

export const SearchBar = React.memo(
  ({ placeholder, onInputChange }: SearchBarProps) => {
    return (
      <div className={styles.searchBarContainer}>
        <input
          placeholder={placeholder}
          className={styles.searchBarContainer_input}
          onChange={onInputChange}
        />
        <img {...IMAGE_CONFIG} className={styles.searchBarContainer_image} />
      </div>
    );
  },
);