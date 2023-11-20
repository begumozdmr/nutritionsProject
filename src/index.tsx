import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'styles/style.css';
import { BrowserRouter } from 'react-router-dom';
import { ContextProviders } from 'context/contextProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProviders>
        <App />
      </ContextProviders>
    </BrowserRouter>
  </React.StrictMode>
);
