// ui/components/App/Header.js
import React, { Component } from 'react'
import Input from './Input'
import './Login.scss'
import 'whatwg-fetch';
import AuthService from '../../services/AuthService';
const API = 'http://localhost:5000/api/v1/users/login/'
export default class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      id:"",
      password:""
    }
  }
  onClickLogin(e){
    e.preventDefault()
    console.log(this.refs.inputPassword.value)
    let user_password = this.refs.inputPassword.value
    let user_id = this.refs.inputID.value
    fetch(API,
    {method: 'POST',headers:{'Content-Type': 'application/json'},
    body:JSON.stringify({"username":user_id,"password":user_password})})
      //  .then(() => fetch(API))
      //  .then((data) => data.json())
      //  .then((data) => {this.setState({id:"",password:""})})
    this.refs.inputPassword.value = ''
    this.refs.inputID.value = ''
  }
  handleID(e){
  }
  render() {
    return (
      <div className="LoginModal container text-center">
        <br/>
        <form
        onSubmit={(e) => this.onClickLogin(e)}
          >
          <div className="inputContainerID row">
                <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                  <div className="text-right">
                     <span className="glyphicon glyphicon-user"></span>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                  <div className="text-left">
                  <input
                    id="name"
                    type="text"
                    onChange={(e) => this.handleID(e)}
                    placeholder="username"
                    ref = "inputID" />
                  </div>
                </div>
          </div>
          <br/>
          <div className="inputContainerPass row">
            <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5">
              <div className="text-right">
                <span className="glyphicon glyphicon-lock"></span>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
              <div className="text-left">
                <input
                  id="password"
                  type="password"
                  placeholder="password"
                  ref="inputPassword"
                  />
              </div>
            </div>
        </div>
        <br/>
        <button className="btn btn-info"
          type="submit">
          Log in
        </button>
        </form>
    </div>
  )
}
}
