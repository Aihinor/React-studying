import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

class App extends React.Component {

  state = {
    comments: [],
    userName: '',
    userContent: ''
  }

  handleForm = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  publishTxt = () => {
    const { comments, userName, userContent } = this.state
    if (userName.trim() === '') {
      alert('请输入名字')
    } else if (userContent.trim() === '') {
      alert('请输入评论内容')
    } else {
      const newComments = [...comments, { id: Math.random(), name: userName, content: userContent }]
      this.setState({
        comments: newComments,
        userContent: '',
        userName: ''
      })
    }
  }

  render() {
    const { comments, userName, userContent } = this.state
    return (
      <div className='mainBox'>
        {/* 文本框 */}
        <input className='inputBox' type="text" placeholder='请输入评论人' name='userName' value={userName} onChange={this.handleForm} />
        <textarea className='textareaBox' placeholder='请输入评论内容' name='userContent' value={userContent} onChange={this.handleForm}></textarea><br />
        <button onClick={this.publishTxt}>发表评论</button>
        {
          comments.length === 0
            ? <div className='commentBox'>暂无评论，快去评论吧～</div>
            : comments.map(item =>
              <ul>
                <li>
                  <h3>评论人：{item.name}</h3>
                  <p>评论内容：{item.content}</p>
                </li>
              </ul>
            )}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))