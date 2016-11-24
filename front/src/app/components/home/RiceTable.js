import React, { Component } from 'react'
import {getProvince} from '../../loader/provinceLoader'
import {connect} from 'react-redux'
import {getSeason,getSensitivity,getRiceType} from '../../loader/universalLoader'

class RiceTable extends Component {
  render(){
    return(
      <table className="highlight">
        <thead>
          <tr>
            <th data-field="rice">Rice Name</th>
            <th data-field="type">Rice Type</th>
            <th data-field="humidity">Humidity</th>
            <th data-field="season">Season</th>
            <th data-field="yeild">Yield</th>
            <th data-field="photo-period">Photo Peroid</th>
            <th data-field="province">Sell Place</th>
            <th data-field="price">Price</th>
          </tr>
        </thead>

        <tbody>
          {
            this.props.rices.data.map(
            (rice)=>(
              <tr
                key={this.props.rices.data.indexOf(rice)}
              >
                <td>{rice.Rice}</td>
                <td>{getRiceType(rice.RiceType)}</td>
                <td>{rice.Humidity!='none'? <span>{rice.Humidity} %</span>:<span>N/A</span>}</td>
                <td>{getSeason(rice.HarvestingSeason)}</td>
                <td>{rice.Yield}</td>
                <td>{getSensitivity(rice.PhotoPeroid)}</td>
                <td>{getProvince(rice.SellPlace)}</td>
                <td>{rice.Price}</td>
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
export default connect(mapStateToProps)(RiceTable)
