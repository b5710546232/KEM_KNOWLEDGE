import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getSeason,getSensitivity,getRiceType} from '../../loader/universalLoader'

class BestYeildTable extends Component {
  render(){
    return(
      <table className="highlight">
        <thead>
          <tr>
            <th data-field="rice">Rice Name</th>
            <th data-field="type">Rice Type</th>
            <th data-field="season">Harvesting Season</th>
            <th data-field="yeild">Yield</th>
            <th data-field="photo-period">Photo Peroid</th>
          </tr>
        </thead>

        <tbody>
          {
            this.props.yeild.data.map(
            (rice)=>(
              <tr
                key={this.props.yeild.data.indexOf(rice)}
              >
                <td>{rice.Rice}</td>
                <td>{getRiceType(rice.RiceType)}</td>
                <td>{getSeason(rice.HarvestingSeason)}</td>
                <td>{rice.BestYield}</td>
                <td>{getSensitivity(rice.PhotoPeriod)}</td>
              </tr>
            )
            )
          }
        </tbody>
      </table>
    )
  }
}
const mapStateToProps = (state) => {
  return state
}
export default connect(mapStateToProps)(BestYeildTable)
