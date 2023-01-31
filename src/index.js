import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';
import { AxiosProvider } from './contexts/AxiosProvider';

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
    <AxiosProvider>

      <App />
    </AxiosProvider>
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
