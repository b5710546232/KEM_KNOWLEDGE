import React, { Component } from 'react'
import Preview from './Slide-preview'
import Footer from './Footer-menu'
export default class Home extends Component {

  render() {
    return (
      <div>
        <Preview/>
        <Footer/>
      </div>
    )
  }
}
