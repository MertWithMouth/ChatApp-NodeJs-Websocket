import React, { Component } from 'react';
import DisplayMessages from '../DisplayMessage/DisplayMessage';
import MessageBox from  '../MessageBox/MessageBox';
import SidePanel from '../SidePanel/SidePanel';
import Layout from './Layout'
import axios from 'axios';

import './MessagePanel.css'





class MessagePanel extends Component {



    
    state={
      messages:[],
      usernames:[],
      

          }
    

    
    


    
          connection = new WebSocket('ws://localhost:9090/')


          componentDidMount() {
      
      
          
          //event listener
          this.connection.onmessage = (message) => {
      
          const data = JSON.parse(message.data)
          this.setState({messages: [...this.state.messages, data]})
      
      
      }
      }
      

 sendMessage=(message)=>{

  const data= {username: this.props.username, message: message}
        this.connection.send(JSON.stringify(data))
  
 }


 createUsers(){

  this.setState({usernames: 
  [...this.state.usernames, this.props.username]})
  
 }





  render()
  
 { 
 
  
  return (
    <div className="MessagePanel">

      <Layout/>
      <SidePanel users={this.state.usernames} />  
      <DisplayMessages messages={this.state.messages} username={this.props.username} />
      <MessageBox sendMessage={this.sendMessage} username={this.props.username} fetchData={this.fetchData} />

    </div>
  );}
}

export default MessagePanel;
