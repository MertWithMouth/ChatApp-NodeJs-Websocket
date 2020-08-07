import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Podo from '../../Assets/podo.png'
import './Login.css'
import {Button} from 'react-bootstrap';
import {InputGroup} from 'react-bootstrap';

import './user-solid.svg'

import './logo.svg'



class Login extends Component{

    login=(e) =>{
    e.preventDefault()
    this.props.setUsername(e.target.username.value)

    }
    
    



    render(){
        return (
            <div className='LoginPage'>
            <div className= 'wrap'>
            <div className="loginOuterContainer">
                <div className="imagecontainer">  
              <img src= {Podo} alt='podo'/>
              </div>

              <form className="loginform" onSubmit={this.login}>  

                    <span className= 'title'>Welcome to Jotform Chat</span>
                    <div className='logininput'>
                        
                    <div class="input-group-prepend">
                    <span class="input-group-text">@</span>
                    <input type="text" class="form-control" placeholder="Username" id="usr" name="username"/>
                    </div>
        
                    </div>
                    <button className='button' ><span>Log-In </span></button>
                </form>
                </div>
            </div>
           </div>
            
          );


        
    }
}

export default Login;
