import React from 'react';
import ReactDOM from 'react-dom';

const isLoading = false;
// if-else
// const loadData = ()=>{
//   if(isLoading) {
//     return <div>loading...</div>
//   }else {
//     return <div>数据加载完成，此处显示加载后的数据</div>
//   }
// }

// 三元表达式
const loadData = ()=>{
  return isLoading ? <div>loading...</div> : <div>数据加载完成，此处显示加载后的数据</div>;
}

const title = (
  <h1>
    {loadData()}
  </h1>
)

ReactDOM.render(title,document.getElementById('root'));