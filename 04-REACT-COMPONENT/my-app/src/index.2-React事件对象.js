import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
  handleClick (e){
    // 阻止浏览器的默认行为
    e.preventDefault()
    console.log('a标签的单击事件被触发了')
 }
  render(){
    return(
      <a href='http://itcast.cn/' onClick={this.handleClick}>传智播客</a>
    )
  }
}

ReactDOM.render(<App/>,document.getElementById('root'))