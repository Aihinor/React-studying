import React from 'react';
import ReactDOM from 'react-dom';

const { Provider, Consumer } = React.createContext();

class App extends React.Component {

  render() {
    return (
      <div>
        <Child2 />
      </div>
    )
  }

}

class Child2 extends React.Component {

  state = {
    count: 0
  }

  onIncreament = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <Provider value={this.state.count}>
        <div>
          <button onClick={this.onIncreament}>+1</button>
          <Child1/>
        </div>
      </Provider>
    )
  }
}

const Child1 = () => {
  return (
    <div>
      <Consumer>{data => <h1>计数器：{data}</h1>}</Consumer>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))