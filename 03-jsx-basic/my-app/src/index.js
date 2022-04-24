import React from 'react';
import ReactDOM from 'react-dom';

// 引入CSS
import './CSS/index.css'

const list = (
  <h1 className='title' style={{backgroundColor:'gray'}}>
    JSX的样式处理
  </h1>
);

ReactDOM.render(list,document.getElementById('root'));