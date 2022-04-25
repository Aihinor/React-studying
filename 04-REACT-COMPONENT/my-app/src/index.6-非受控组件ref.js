import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
  
  txtRef = React.createRef()

  getTxt = ()=>{
    console.log(this.txtRef.current.value)
  }

  render(){
    return(
      <div>
        {/* 文本框 */}
        <input type="text" ref={this.txtRef}/><br/>
        <button onClick={this.getTxt}>获取文本框的值</button>
      </div>
    )
  }
}

ReactDOM.render(<App/>,document.getElementById('root'))