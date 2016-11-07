import React, { Component } from 'react'
import { Link } from 'react-router'

import '../../../assets/scss/navbar.scss'
import {connect} from 'react-redux'
class HeaderNavbar extends Component {
  componentDidMount(){
    $(".button-collapse").sideNav()
  }
  shouldComponentUpdate(nextProps){
    return this.props.user !== nextProps.user
  }
  hideNav(){
    $('.button-collapse').sideNav('hide');
  }
  render() {
    var margin = {
      marginLeft: "1%",
      marginRight: "1%"
    }
    return (
      <nav className=" light-blue">
        <div className="nav-wrapper  ">
          <Link className="waves-effect waves-light brand-logo center" to={{ pathname:'/' }}>Rice Variety</Link>
          <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
          <ul className="hide-on-med-and-down " style={margin}>
            <li className="left"><Link className="waves-effect waves-light" to={{ pathname:'/' }}>Simple</Link></li>
            <li className="left"><Link className="waves-effect waves-light" to={{ pathname:'/expert' }}>Expert</Link></li>
          </ul>
          <ul className="side-nav light-blue " id="mobile-demo">
            <li><Link className="waves-effect waves-light white-text" onClick={()=>this.hideNav()} to={{ pathname:'/' }}>Simple</Link></li>
            <li><Link className="waves-effect waves-light white-text" onClick={()=>this.hideNav()} to={{ pathname:'/expert' }}>Expert</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}
const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(HeaderNavbar)
