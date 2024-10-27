import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

import { BrowserRouter } from 'react-router-dom';
import Context from './context/Context.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Context>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Context>
  </StrictMode>
);
