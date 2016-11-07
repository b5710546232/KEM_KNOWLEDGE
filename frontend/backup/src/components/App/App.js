import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import React, { Component } from 'react'
import Navbar from '../Head/Navbar'
import Header from '../Head/Header'
import Preview from './Slide-preview'
import Footer from './Footer-menu'
import './App.scss'
// import 'bootstrap-material-design/dist/css/bootstrap-material-design.min.css'
// import 'bootstrap-material-design/dist/js/material.min.js'
export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Header/>
        <div>
          <div>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}
