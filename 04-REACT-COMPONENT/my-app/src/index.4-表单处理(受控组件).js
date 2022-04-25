import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
  state = {
    txt:'',
    content:'',
    city:'gz',
    iscChecked:false
  }
  // 处理文本框的变化
  handleChange = (e)=>{
    this.setState({
      txt:e.target.value
    })
  }

  // 处理富文本框的变化
  handleContent = (e)=>{
    this.setState({
      content:e.target.value
    })
  }

  // 处理下拉框的变化
  hangdleCity = (e)=>{
    this.setState({
      city:e.target.value
    })
  }

  //处理复选框的变化
  handleChecked = (e)=>{
    this.setState({
      iscChecked:e.target.checked
    })
  }

  render(){
    return(
      <div>
        {/* 文本框 */}
        <input type="text" value={this.state.txt} onChange={this.handleChange}/><br/>

        {/* 富文本框 */}
        <textarea value={this.state.content} onChange={this.handleContent}></textarea><br/>
        
        {/* 下拉框 */}
        <select value={this.state.city} onChange={this.hangdleCity}>
          <option value="sh">上海</option>
          <option value="bj">北京</option>
          <option value="gz">广州</option>
        </select>

        {/* 复选框 */}
        <input type="checkbox" checked={this.state.iscChecked} onChange={this.handleChecked}/>
      </div>
    )
  }
}

ReactDOM.render(<App/>,document.getElementById('root'))