import { render, screen } from '@testing-library/react';
import { ErrorBoundary } from 'components/ErrorBoundary';
import { ERROR_TEXT, ERROR_TITLE } from 'components/ErrorBoundary/config';

describe('ErrorBoundary component', () => {
  it('renders children when there is no error', () => {
    const ChildComponent = () => (
      <div data-cy="child-element">Child Element</div>
    );

    render(
      <ErrorBoundary>
        <ChildComponent />
      </ErrorBoundary>,
    );

    const childElement = screen.getByTestId('child-element');
    expect(childElement).toBeInTheDocument();
  });

  it('renders error message when there is an error', () => {
    const ChildComponent = () => {
      throw new Error('Test error');
    };

    render(
      <ErrorBoundary>
        <ChildComponent />
      </ErrorBoundary>,
    );

    const errorBoundary = screen.getByTestId('error-boundary');
    const errorTitle = screen.getByText(ERROR_TITLE);
    const errorMessage = screen.getByText(ERROR_TEXT);

    expect(errorBoundary).toBeInTheDocument();
    expect(errorTitle).toBeInTheDocument();
    expect(errorMessage).toBeInTheDocument();
  });
});
