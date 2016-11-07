// ui/components/Register/RegisterForm.js
import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import validator from 'validator';
import { FormGroup ,
  Col,
  Row,
  Form,
  FormControl,
  ControlLabel,
  HelpBlock } from 'react-bootstrap'
  import './Regis.scss'
  import 'whatwg-fetch'
  const API = 'http://localhost:8000/api/v1/u/user/'
  //const API = 'http://158.108.138.84:8000/api/v1/member/detail/'

  export default class RegisForm extends Component {
    constructor(props){
      super(props);

      this.state = {
        emailError: false,
        validate_user: null,
        validate_email: null
      };
    }

    handleChange(event) {
      this.setState({[event.target.name]: event.target.value})
    }


    validateData(data){
      let { username,first_name, last_name, password,confirm_password,email, } = data
      console.log("email = "+email);
      let validate = true
      if(username === null || username ===''){
        console.log('false');
        this.setState({validate_user:'error'})
        console.log(this.state.validate_user)
        validate = false
      }
      if(!validator.isEmail(email)){
        console.log('hi');
        this.setState({validate_email:'error'})
        validate = false
      }
      return validate
    }

    regis(e){
      e.preventDefault()
      const {onClose}  = this.props
      let username = ReactDOM.findDOMNode(this.refs.input_username).value
      let password = ReactDOM.findDOMNode(this.refs.input_password).value
      let confirm_password = ReactDOM.findDOMNode(this.refs.input_confirm_password).value
      let email = ReactDOM.findDOMNode(this.refs.input_email).value
      let first_name = ReactDOM.findDOMNode(this.refs.input_first_name).value
      let last_name = ReactDOM.findDOMNode(this.refs.input_last_name).value

      // console.log(this.state.userError)
      let data = {
        username: username,
        confirm_password:confirm_password,
        password: password,
        email: email,
        first_name: first_name,
        last_name: last_name
      }
      if(this.validateData(data)){
        fetch(API,
          {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(
              data
            )
          }).then(function(response) {
            if (!response.ok) {
              throw Error(response.statusText);
            }
            return response;
          }).then(function(response) {
            console.log("ok");
            onClose()
          }).catch(function(error) {
            console.log(error);
          });
        }
      }

      render() {
        return (
          <div className="text-center">
            <form className="RegisForm">
              <br/>
              {/* username */}
              <Row>
                <FormGroup controlId="input_user"
                  validationState={this.state.validate_user}>
                  <Col componentClass={ControlLabel} sm={4}>
                    Username
                  </Col>
                  <Col sm={6}>
                    <FormControl
                      type="text"
                      ref="input_username"
                      label="Username"
                      placeholder="Enter Username"
                      />
                  </Col>
                </FormGroup>
              </Row>
              {/* password */}
              <Row>
                <FormGroup controlId="input_password">
                  <Col componentClass={ControlLabel} sm={4}>
                    Password
                  </Col>
                  <Col sm={6}>
                    <FormControl
                      type="password"
                      placeholder="Enter Password"
                      ref = "input_password"
                      />
                  </Col>
                </FormGroup>
              </Row>
              {/* confirm password */}
              <Row>
                <FormGroup controlId="input_confirm_password">
                  <Col componentClass={ControlLabel} sm={4}>
                    Confirm Password
                  </Col>
                  <Col sm={6}>
                    <FormControl
                      type="password"
                      placeholder="Enter Confirm Password"
                      ref = "input_confirm_password"
                      />
                  </Col>
                </FormGroup>
              </Row>
              {/* first_name */}
              <Row>
                <FormGroup controlId="input_first_name">
                  <Col componentClass={ControlLabel} sm={4}>
                    Firstname
                  </Col>
                  <Col sm={6}>
                    <FormControl
                      type="text"
                      placeholder="Enter Firstname"
                      ref = "input_first_name"
                      />
                  </Col>
                </FormGroup>
              </Row>
              {/* last_name */}
              <Row>
                <FormGroup controlId="input_last_name">
                  <Col componentClass={ControlLabel} sm={4}>
                    Lastname
                  </Col>
                  <Col sm={6}>
                    <FormControl
                      type="text"
                      placeholder="Enter Lastname"
                      ref = "input_last_name"
                      />
                  </Col>
                </FormGroup>
              </Row>
              {/* email */}
              <Row>
                <FormGroup controlId="input_email" validationState={this.state.validate_email}>
                  <Col componentClass={ControlLabel} sm={4}>
                    E-mail
                  </Col>
                  <Col sm={6}>
                    <FormControl
                      type="email"
                      value={this.state.value}
                      placeholder="Enter Email"
                      ref = "input_email"
                      />
                  </Col>
                </FormGroup>
              </Row>
              <div className="regisBtn">
                <input id="btnSubmit" type="submit" value = "Sign up" className="btn btn-danger" onClick={this.regis.bind(this)} />
              </div>
            </form>
          </div>
        )
      }
    }
