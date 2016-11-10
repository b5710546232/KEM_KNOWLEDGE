import React, { Component } from 'react'
import {connect} from 'react-redux'

class Map extends Component {

  createMap() {
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 13.0069792, lng: 102.2699603},
      zoom: 6
    })
    this.setCenter()
  }

  setCenter(){
    let current_map = this.map
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
        current_map.setCenter(pos)
        current_map.setZoom(10)
      }, function() {
        handleLocationError(true,  current_map.getCenter());
      })
    }
  }
  componentDidMount() {
    this.createMap();
  }

  render(){
    let style={
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
