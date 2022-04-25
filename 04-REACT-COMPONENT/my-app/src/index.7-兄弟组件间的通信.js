import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

  state = { count: 0 }

  onIncreament = ()=>{
    this.setState({
      count:this.state.count + 1
    })
  }

  render() {
    return (
      <div>
        <Child1 count={this.state.count}/>
        <Child2 onIncreament={this.onIncreament}/>
      </div>
    )
  }

}

const Child1 = (props) => {
  return (
    <h1>计数器：{props.count}</h1>
  )
}

const Child2 = (props) => {
  return (
    <button onClick={() =>props.onIncreament()}>+1</button>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))