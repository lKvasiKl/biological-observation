# Task: Parse biom.json and Build a Table

## Description:

This task involves parsing data stored in **`biom.json`** and building a table according to the specifications provided. The data is stored in **Biological Observation Matrix 1.0.0 format**.

## Requirements:

- Parse the “rows” field of the `biom.json`, which contains an array of table rows;
- Display columns for Name, Tax ID, Abundance score, Relative abundance, and Unique matches frequency;
- Use React.js, JS, HTML, CSS (SASS), TypeScript;
- Layout is required in "Responsive design". Max. resolution 1920x1080px, minimum resolution 320x480px;
- Search the table data (by name);
- Test coverage of the entire application (cypress, joke).

## Example Output:

| Name                             | Tax ID | Abundance Score | Relative Abundance | Unique Matches Frequency |
| :------------------------------- | :----- | :-------------- | :----------------- | :----------------------- |
| Lactobacillus crispatus SJ-3C-US | 575598 | 139028.29       | 94.43%             | 1362                     |
