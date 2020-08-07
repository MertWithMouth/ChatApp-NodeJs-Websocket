import React from 'react';
import './DisplayMessage.css'

const message =(props) => {


  

    

        return (
    
      <div className={props.myusername === props.username ? 'mymessage' : 'othermessage'}>
        
          
            <div className='userid'>{props.username}</div>
            <div className='textmessage'>{props.text}</div>
        </div>
    
    
  );
}


export default message;
