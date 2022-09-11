import React from 'react';
import ReactDOM from 'react-dom/client';
import { TransactionsProvider } from './context/transactionsContext';
import { SpeechProvider } from '@speechly/react-client';

import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SpeechProvider appId='cdf0cea2-9980-4db1-a29e-b1da373e3f3f' language="en-US">
    <TransactionsProvider>
      <App />
    </TransactionsProvider>
  </SpeechProvider>
);
