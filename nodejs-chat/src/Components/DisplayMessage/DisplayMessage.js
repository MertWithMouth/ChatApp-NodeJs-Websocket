import React, { Component } from 'react';
import ReactDOM from'react-dom'
import Message from './Message'
import './DisplayMessage.css'


class DisplayMessages extends Component {

 //will stop auto scrolling down when you send a message
 componentWillUpdate=()=>{

  const node=ReactDOM.findDOMNode(this)
  this.shouldScrollToBottom = node.scrollTop +node.clientHeight + 100 >= node.scrollHeight


}

//Auto scrolls when some client messages
componentDidUpdate=()=>{
  if(this.shouldScrollToBottom) {
    const node= ReactDOM.findDOMNode(this)
    node.scrollTop=node.scrollHeight

  }

}

  render(){
return (
  <div className="DisplayMessage">
    <div className='message-container'>
      {this.props.messages.map(message => {
          return(

              <Message myusername={this.props.username} text={message.message} username={message.username} />
              


          )
      })}
   </div>
  </div>
);}
}

export default DisplayMessages;