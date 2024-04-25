import React from 'react';
import ReactDOM from 'react-dom/client';

import { ErrorBoundary } from 'components/ErrorBoundary';

import { App } from './app';

import 'styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
);
