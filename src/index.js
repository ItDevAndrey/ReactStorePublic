import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './Styles/index.scss';
import App from './App';
import { ProductContextProvider } from './store/product-context';
import { FilterContextProvider } from './store/filter-context';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <ProductContextProvider>
    <FilterContextProvider>
      <App />
    </FilterContextProvider>
  </ProductContextProvider>
);
