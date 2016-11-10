import React, { Component } from 'react'
import {connect} from 'react-redux'

class Map extends Component {

  createMap() {
    this.map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
    });
  }

  componentDidMount() {
    this.createMap();
  }

  render(){
    var style={
      position:'absolute',
      height:'100%',
      width:'100%'
    }
    return (
      <div>
        <div id="map" style={style}></div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return state
}
const mapDispatchToProps = (dispatch) => {
  return {

  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Map)
