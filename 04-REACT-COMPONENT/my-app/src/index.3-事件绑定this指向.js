import React from 'react';
import ReactDOM from 'react-dom';

// class App extends React.Component{
//   state = {
//     count:0
//   }
//   add = ()=>{
//     const count = this.state.count
//     this.setState({count:count+1})
//   }
//   render(){
//     return(
//       <div>
//         <h1>计数器：{this.state.count}</h1>
//         <button onClick={this.add}>+1</button>
//       </div>
//     )
//   }
// }

// 箭头函数
// class App extends React.Component{
//   state = {
//     count:0
//   }
//   add (){
//     const count = this.state.count
//     this.setState({count:count+1})
//   }
//   render(){
//     return(
//       <div>
//         <h1>计数器：{this.state.count}</h1>
//         <button onClick={()=>this.add()}>+1</button>
//       </div>
//     )
//   }
// }

// 事件绑定this指向(bind)
class App extends React.Component{
  constructor(){
    super()
    this.add = this.add.bind(this)
  }
  state = {
    count:0
  }
  add (){
    const count = this.state.count
    this.setState({count:count+1})
  }
  render(){
    return(
      <div>
        <h1>计数器：{this.state.count}</h1>
        <button onClick={this.add}>+1</button>
      </div>
    )
  }
}

ReactDOM.render(<App/>,document.getElementById('root'))