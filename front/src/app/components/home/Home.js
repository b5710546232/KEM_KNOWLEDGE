import React, { Component } from 'react'
import { Link } from 'react-router'
import {Input,Button,Table} from 'react-materialize'
import {loadRice} from '../../actions/RiceAction'
import {connect} from 'react-redux'
class Home extends Component {
  onInput(e){
    e.preventDefault()
    let data = { province:this.refs.form.province.value }
    this.props.loadRice(data)
  }
  render() {
    return (
      <div className="container center">
        <form ref="form">
          <Input s={12} type="text" name="province" label="Input Province" onChange={(e)=>this.onInput(e)}></Input>
        </form>
        {this.props.rices.length>0?
          <Table>
            <thead>
              <tr>
                <th data-field="id">Rice</th>
                <th data-field="name">Harvest Season</th>
                <th data-field="price">Region</th>
              </tr>
            </thead>

            <tbody>
              this.props.rices.map((rice)=>(
                <tr>
                  <td>rice.name</td>
                  <td>rice.harvest_season</td>
                  <td>rice.region</td>
                </tr>
              ))
            </tbody>
          </Table>:
          <div></div>
        }

      </div>
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
