import React, { Component } from 'react'
import {connect} from 'react-redux'
import RiceInfomationModal from './RiceInfomationModal'
import {loadLocation} from '../../actions/MapAction'
import '../../../assets/scss/input.scss'
import '../../../assets/scss/current-button.scss'

class Map extends Component {

  createMap() {
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 13.7246004, lng: 100.6331108},
      zoom: 6
    })
    this.createMarker()
    this.setCenter()
    this.addMapClickListener()
    this.createSearchBox()
    this.createCurrentLocationButton()
  }
  createMarker(){
    this.marker = new google.maps.Marker({
      map: map,
      draggable: true,
      animation: google.maps.Animation.DROP,
      position: {lat: 13.7246004, lng: 100.6331108},
      map:this.map
    })
    this.addMarkerClickListener()
  }
  createCurrentLocationButton(){
    let currentLocationButton = document.getElementById('current-location')
    this.map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(currentLocationButton);
  }
  createSearchBox(){
    let input = document.getElementById('search-input')
    let searchBox = new google.maps.places.SearchBox(input)
    let current_map = this.map
    let current_marker = this.marker
    let relocateMarker = this.relocateMarker
    let recenterMap = this.recenterMap
    current_map.controls[google.maps.ControlPosition.TOP_LEFT].push(input)
    current_map.addListener('bounds_changed', function() {
      searchBox.setBounds(current_map.getBounds())
    })
    searchBox.addListener('places_changed', function() {
      let places = searchBox.getPlaces();
      if (places.length == 0) {
        return;
      }
      let place = places[0]
      let location = place.geometry.location
      relocateMarker(location,current_marker)
      recenterMap(location,current_map)
    })
  }
  relocateMarker(location,marker){
    marker.setPosition(location)
  }
  recenterMap(location,map){
    map.panTo(location)
    map.setZoom(12)
  }
  addMapClickListener(){
    let relocateMarker = this.relocateMarker
    let current_marker = this.marker
    google.maps.event.addListener(this.map, 'click', function(event) {
      relocateMarker(event.latLng,current_marker)
    })
  }
  addMarkerClickListener(){
    let loadLocation = this.props.loadLocation
    this.marker.addListener('click',function(event){
      loadLocation(this.position.lat(),this.position.lng())
      $(document).ready(function(){
        $('#rice-modal').modal('open');
      })
    })
  }
  setCenter(){
    let current_map = this.map
    let current_marker = this.marker
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
        current_map.setCenter(pos)
        current_map.setZoom(10)
        current_marker.setPosition(pos)
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
      height:'93%',
      width:'100%'
    }

    return (
      <div>
        <RiceInfomationModal/>
        <input id="search-input" className="controls pac-container" type="text" placeholder="Search Box"/>
        <div id="current-location"><div className="current-location-button"></div></div>
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
    loadLocation:(lat,lon)=>(
      dispatch(loadLocation(lat,lon))
    )
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Map)
