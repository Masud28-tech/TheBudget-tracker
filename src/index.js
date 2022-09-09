import React from 'react';
import ReactDOM from 'react-dom/client';
import { TransactionsProvider } from './context/transactionsContext';

import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <TransactionsProvider>
      <App />
    </TransactionsProvider>
);
