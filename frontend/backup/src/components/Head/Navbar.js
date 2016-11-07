// ui/components/App/Header.js
import React, { Component } from 'react'
import './Navbar.scss'
import {LoginModal} from '../Login'
import {RegisterModal} from '../Register'
import { Link } from 'react-router'
import 'jquery'
// import 'bootstrap-sass'

export default class Navbar extends Component {
  constructor(props){
    super(props)
    this.state = { hasToken:false }
  }

  componentWillMount(){
    this.token = localStorage.getItem('token')
    if(this.token == null){
      this.setState({hasToken:false})
    }
    else{
      this.setState({hasToken:true})
    }
  }

  logout(){
    this.setState({hasToken:false})
    localStorage.removeItem('token')
  }

  render() {
    return (
      <div>
        <div className="navbar navbar-default nav-app navbar-fixed-top navbar_menu">
          <div className="container-fluid">

            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#mynavbar-content">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <li className="nav navbar-nav navbar-center">
                <Link className="navbar-brand" to={{ pathname:'/' }}>
                  <span className="brand-text">Nature Drink</span>
                </Link>
              </li>
            </div>

            <div className="collapse navbar-collapse " id="mynavbar-content">
              <ul className="nav navbar-nav">

                <li >
                  <Link to={{ pathname:'/store' }}>
                    Store
                  </Link>
                </li>
                <li >
                  <Link to={{ pathname:'/design' }}>
                    Design
                  </Link>
                </li>
                <li >
                  <Link to={{ pathname:'/contact' }}>
                    Contact
                  </Link>
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                {this.state.hasToken ? <li className="icon-bar"><a href="#">WatchList</a></li> : <li><LoginModal/></li> }
                {this.state.hasToken ? <li className="icon-bar"><a href="#">Postal</a></li> : <li><RegisterModal/></li> }
                {this.state.hasToken ? <li className="icon-bar"><a href="#">Payment</a></li> : <span></span> }
                {this.state.hasToken ? <li className="icon-bar"><button className="btn btn-danger btn_logout" onClick={this.logout.bind(this)}>Logout</button></li> : <span></span> }
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
