import React from 'react';
import ReactDOM from 'react-dom';

const songs = [
  {id:1,name:'消愁'},
  {id:2,name:'像我这样的人'},
  {id:3,name:'南山南'}
];

const title = (
  <ul>
    {songs.map(item => <li key={item.id}>{item.name}</li>)}
  </ul>
);

ReactDOM.render(title,document.getElementById('root'));