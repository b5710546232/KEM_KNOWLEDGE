import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Modal} from 'react-materialize'
class RiceInfomationModal extends Component {
  componentDidMount(){
    $('#rice-modal').modal()
  }
  render(){
    console.log(this.props.location);
    return(
      <div>
        <div id="rice-modal" className="modal modal-fixed-footer">
          <div className="modal-content">
            <div className="row">
              <h4>Rice Suggestion - {this.props.location.sub_district}, {this.props.location.province}</h4>
            </div>
            <div className="row">
              <div className="col s8">
                <div className="row">
                  <div className="col s12">
                    <h5>Location</h5>
                  </div>
                </div>
                <div className="row">
                  <div className="col s6">
                    <strong>Sub-District</strong>
                  </div>
                  <div className="col s6">
                    {this.props.location.sub_district}
                  </div>
                </div>
                <div className="row">
                  <div className="col s6">
                    <strong>District</strong>
                  </div>
                  <div className="col s6">
                    {this.props.location.district}
                  </div>
                </div>
                <div className="row">
                  <div className="col s6">
                    <strong>Province</strong>
                  </div>
                  <div className="col s6">
                    {this.props.location.province}
                  </div>
                </div>
              </div>
              <div className="col s4 ">
                <img
                  className="circle
                  responsive-img right"
                  src={this.props.location.lat?
                    "http://maps.googleapis.com/maps/api/staticmap?center="+this.props.location.lat+","+this.props.location.lng+"&zoom=15&maptype=hybrid&size=200x200&key=AIzaSyBfW5XODIw5cTc84x4h8lL1qhB7EbLPhX0"
                    :""
                    }>
                </img>
              </div>
            </div>
            <p>Data Here</p>
          </div>
          <div className="modal-footer">
            <a className=" modal-action modal-close waves-effect waves-green btn-flat">Close</a>
          </div>
        </div>
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
export default connect(mapStateToProps,mapDispatchToProps)(RiceInfomationModal)
