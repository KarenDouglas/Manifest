import React from 'react';
import ReactDOM from 'react-dom/client';
import { BlogsContextProvider } from './context/BlogContext';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'; 



import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BlogsContextProvider>
      <App />
    </BlogsContextProvider>
  </React.StrictMode>
);


