import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import App from './App';
import { SateProvider } from './firebase/context';

ReactDOM.render(
  <React.StrictMode>
    <SateProvider>
    <App />
    </SateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

