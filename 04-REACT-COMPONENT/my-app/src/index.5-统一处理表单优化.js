import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
  state = {
    txt:'',
    content:'',
    city:'gz',
    isChecked:false
  }
  // 处理表单的变化
  handleForm = (e)=>{
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    this.setState({
      [name]:value
    })
  }

  render(){
    return(
      <div>
        {/* 文本框 */}
        <input type="text" name='txt' value={this.state.txt} onChange={this.handleForm}/><br/>

        {/* 富文本框 */}
        <textarea value={this.state.content} name='content' onChange={this.handleForm}></textarea><br/>
        
        {/* 下拉框 */}
        <select value={this.state.city} name='city' onChange={this.handleForm}>
          <option value="sh">上海</option>
          <option value="bj">北京</option>
          <option value="gz">广州</option>
        </select>

        {/* 复选框 */}
        <input type="checkbox" name='isChecked' checked={this.state.iscChecked} onChange={this.handleForm}/>
      </div>
    )
  }
}

ReactDOM.render(<App/>,document.getElementById('root'))