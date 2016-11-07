import React, { Component } from 'react'

export default class Header extends Component {
  constructor(props){
    super(props)
    this.state = {status_msg:''}
  }

  componentWillMount(){
    this.token = localStorage.getItem('token')
    if(this.token == null){
      this.setState({status_msg:'Guest'})
    }
    else{
      this.setState({status_msg:'Welcome'})
    }
  }

  render() {
    return (
      <div>
      <nav className="navbar nav-app  navbar-fixed-top navbar_status">
      <div className="container-fluid">
        <ul className="nav navbar-nav navbar-right">
          <li>{this.state.status_msg}&nbsp;&nbsp;</li>
        </ul>
      </div>
      </nav>
      </div>
    )
  }
}
