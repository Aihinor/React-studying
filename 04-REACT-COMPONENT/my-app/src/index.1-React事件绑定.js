import React from 'react';
import ReactDOM from 'react-dom';

// class App extends React.Component{
//   handleClick (){
//     console.log('单击事件被触发了')
//  }
//   render(){
//     return(
//       <button onClick={this.handleClick}>点我</button>
//     )
//   }
// }

// 通过函数组件绑定事件
function App(){
  function handleClick(){
    console.log('单击事件被触发了')
  }
  return(
    <button onClick={handleClick}>点我</button>
  )
}

ReactDOM.render(<App/>,document.getElementById('root'))