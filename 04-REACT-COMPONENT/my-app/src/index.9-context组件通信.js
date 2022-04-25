import React from 'react';
import ReactDOM from 'react-dom';

const { Provider, Consumer } = React.createContext();

class App extends React.Component {
  state = {
    count:100
  }
  render() {
    return (
      <Provider value={this.state.count}>
        <div>
          父组件
          <First />
        </div>
      </Provider>
    )
  }
}

const First = () => {
  return (
    <div>
      第一组件
      <Second />
    </div>
  )
}

const Second = () => {
  return (
    <div>
      第二组件
      <Third />
    </div>
  )
}

const Third = () => {
  return (
      <div>
        <Consumer>{data => <h1>接收到父组件的数据是：{data}</h1>}</Consumer>
      </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))