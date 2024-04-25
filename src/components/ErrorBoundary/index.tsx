import { Component, ErrorInfo } from 'react';

import { ErrorBoundaryProps, ErrorBoundaryState } from './types';
import { ERROR_TEXT, ERROR_TITLE } from './config';

import styles from './style.module.scss';

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(_error: Error, errorInfo: ErrorInfo) {
    this.setState({
      errorInfo,
    });
  }

  render() {
    const { hasError, error, errorInfo } = this.state;

    if (hasError) {
      return (
        <div className={styles.errorBoundaryContainer} data-cy="error-boundary">
          <h1 className={styles.errorBoundaryContainer_title}>{ERROR_TITLE}</h1>
          <p className={styles.errorBoundaryContainer_error}>
            {error && error.toString()}
          </p>
          <span className={styles.errorBoundaryContainer_text}>
            {ERROR_TEXT}
          </span>
          <span className={styles.errorBoundaryContainer_text}>
            {errorInfo && errorInfo.componentStack}
          </span>
        </div>
      );
    }

    return this.props.children;
  }
}
