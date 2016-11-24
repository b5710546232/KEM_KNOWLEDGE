import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Modal} from 'react-materialize'
import ProvinceJSON from '../../../assets/json/province.json'
import RiceTable from './RiceTable'
import {loadRice,loadYeild} from '../../actions/RiceAction'
import {load} from '../../actions/LoadAction'
import BestYeildTable from './BestYeildTable'
class RiceInfomationModal extends Component {

  constructor(props){
    super(props)
    this.state = {
      mode : "simple",
      init : true
    }
  }

  componentDidMount(){
    $('#rice-modal').modal()
  }

  componentDidUpdate(){
    $('select').material_select()
    console.log(this.state.init);
    if (this.state.init) {
      console.log(this.state.init);
      $('#rice-collection').change(this.changeMode.bind(this));
    }
  }

  changeMode(){
    let mode = document.getElementById("rice-collection").value
    this.setState({mode:mode})
    this.loadRice(mode)
    this.setState({init:false})
  }
  loadRice(mode){
    if (this.props.location.sub_district) {
      let sub_district = this.props.location.sub_district.toLowerCase().split(" ").join("_")
      let district = this.props.location.district.toLowerCase().split(" ").slice(0,this.props.location.district.toLowerCase().split(" ").length-1).join("_")
      let province=this.props.location.province.toLowerCase().split(' ').join('')
      let data = {
      province,
        district,
      sub_district
      }
      if (mode=="yeild"){
        this.props.loadYeild(data)
      }else {
        this.props.loadRice(data,mode)
      }
    }
  }

  render(){
    return(
      <div>
        <div id="rice-modal" className="modal modal-fixed-footer">
          <div className="modal-content">
            <div className="row">
              <h4>Rice Suggestion - {this.props.location.sub_district!==''? <span>{this.props.location.sub_district}, {this.props.location.province}</span>:<span className="orange-text darken-4 ">Unknown Location</span> }</h4>
            </div>
            <div className="row">
              <div className="col s8">
                <div className="row">
                  <div className="col s12">
                    <h5>Location</h5>
                  </div>
                </div>
                {this.props.location.sub_district===''?
                  <div className="row">
                    <h4 className="deep-orange-text darken-4">Location Not Found</h4>
                  </div>:
                  <div>
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
                }
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
            {this.props.rices.data.length<=0?
              <div className="row center">
                <h4 className="amber-text accent-4">Rice not available now see you next time...</h4>
              </div>:
              <div className="row center">
                <div className="row">
                  <div className="input-field col s12">
                    <select id="rice-collection" value={this.state.mode} >
                      <option value="simple">All Rice Variety in {this.props.location.sub_district}</option>
                      <option value="price" >Best Price Rice Variety in {this.props.location.sub_district}</option>
                      <option value="yeild" >Best Yeild Rice Variety in {this.props.location.sub_district}</option>
                    </select>
                    <label>Select Rice Variety Collection</label>
                  </div>
                </div>
                {
                  this.state.mode=="yeild"?
                  <BestYeildTable/>:
                    <RiceTable/>
                  }
                </div>
              }
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
      loadRice: (data,path)=>(
        dispatch(loadRice(data,path))
      ),
      loadYeild: (data)=>(
        dispatch(loadYeild(data))
      ),
      load : ()=>(
        dispatch(load())
      )
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(RiceInfomationModal)
