import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { WorkDataProvider } from './components/WorkDataContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <WorkDataProvider>
    <App />
    </WorkDataProvider>
);

