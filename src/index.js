import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router'
import './styles/common/global.css' // 引入全局样式

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
)
