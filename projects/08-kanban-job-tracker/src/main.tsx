import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { ThemeProvider } from './context/ThemeContext';
import { JobProvider } from './context/JobContext';
import './index.css';

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ThemeProvider>
        <JobProvider>
          <App />
        </JobProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
}
