import { render, fireEvent } from '@testing-library/react';
import { SearchBar } from 'components/SearchBar';

export const INPUT_PLACEHOLDER = 'Bacteria search...';

describe('SearchBar component', () => {
  test('SearchBar renders correct', () => {
    const onInputChange = jest.fn();

    const { getByPlaceholderText, getByTestId } = render(
      <SearchBar
        placeholder={INPUT_PLACEHOLDER}
        onInputChange={onInputChange}
      />,
    );

    const inputElement = getByPlaceholderText(INPUT_PLACEHOLDER);
    const searchBarElement = getByTestId('search-bar');

    expect(inputElement).toBeInTheDocument();
    expect(searchBarElement).toBeInTheDocument();
  });

  test('calls onInputChange handler when input changes', () => {
    const onInputChange = jest.fn();

    const { getByPlaceholderText } = render(
      <SearchBar
        placeholder={INPUT_PLACEHOLDER}
        onInputChange={onInputChange}
      />,
    );

    const inputElement = getByPlaceholderText(INPUT_PLACEHOLDER);
    fireEvent.change(inputElement, { target: { value: 'test' } });

    expect(onInputChange).toHaveBeenCalledTimes(1);
    expect(onInputChange).toHaveBeenCalledWith(expect.any(Object));
  });
});
