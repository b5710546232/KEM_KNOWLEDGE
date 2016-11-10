import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Modal} from 'react-materialize'
class RiceInfomationModal extends Component {
  componentDidMount(){
    $('#rice-modal').modal()
  }
  render(){
    return(
      <div>
        <div id="rice-modal" className="modal modal-fixed-footer">
          <div className="modal-content">
            <h4>Rice Variety Suggested Information</h4>
            <p>Data Here</p>
          </div>
          <div className="modal-footer">
            <a href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat">Close</a>
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
