import React, { Component } from 'react'
import { Link } from 'react-router'
import {Input,Button,Table} from 'react-materialize'
import {loadRice} from '../../actions/RiceAction'
import {connect} from 'react-redux'
import Map from './Map'

class Home extends Component {
  onInput(e){
    e.preventDefault();
    let data = { province:this.refs.form.province.value }
    this.props.loadRice(data);
  }

  render() {
    return (
      <Map/>
    )
  }
}
const mapStateToProps = (state) => {
  return state
}
const mapDispatchToProps = (dispatch) => {
  return {
    loadRice: (data)=>{
      dispatch(loadRice(data))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)
