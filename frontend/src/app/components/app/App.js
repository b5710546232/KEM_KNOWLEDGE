import React, { Component } from 'react'
import HeaderNavbar from '../header/HeaderNavbar'

export default class App extends Component {
  render() {
    return (
      <div>
        <HeaderNavbar/>
          {this.props.children}
      </div>
    )
  }
}
