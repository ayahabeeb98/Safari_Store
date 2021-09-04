import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import App from './App';
import { SateProvider } from './firebase/context';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <SateProvider>
    <App />
    </SateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

