import React, { Component } from 'react';
import { Input, Button, Table , Row ,Col} from 'react-materialize';
import { connect } from 'react-redux';
import {getSeason,getSensitivity,getRiceType} from '../../loader/universalLoader'
import {getProvince,getDistinct,getSubDistrict} from '../../loader/provinceLoader'

class Expert extends Component {
  render(){
    const pests = [
      {'name': 'thrips', 'label': 'Thrips'},
      {'name': 'mealybug', 'label': 'Mealybug'},
      {'name': 'brownPlantHopper', 'label': 'Brown Plant Hopper'},
      {'name': 'whiteBackedPlantHopper', 'label': 'White Backed Plant Hopper'}, {'name': 'zigzagLeafHopper', 'label': 'Zigzag Leaf Hopper'},
      {'name': 'greenRiceLeafHopper', 'label': 'Green Rice Leaf Hopper'},
      {'name': 'riceHispa', 'label': 'Rice Hispa'},
      {'name': 'stemBorer', 'label': 'Stem Borer'},
      {'name': 'cutWorm', 'label': 'Cut Worm'},
      {'name': 'riceEarCuttingCaterpilla', 'label': 'Rice Ear Cutting Caterpilla'},
      {'name': 'riceLeafFolder', 'label': 'Rice Leaf Folder'},
      {'name': 'riceCaseWorm', 'label': 'Rice Case Worm'},
      {'name': 'riceWhorlMaggot', 'label': 'Rice Whorl Maggot'},
      {'name': 'riceBlackBug', 'label': 'Rice Black Bug'},
      {'name': 'riceGallMidge', 'label': 'Rice Gall Midge'},
      {'name': 'riceBug', 'label': 'Rice Bug'}
    ];
    const diseases = [
      {'name': 'seedlingRotInNurseyBox', 'label': 'Seedling Rot In Nursey Box'},
      {'name': 'sheathRot', 'label': 'Sheath Rot'},
      {'name': 'sheathBlight', 'label': 'Sheath Blight'},
      {'name': 'bacterialLeafBlight', 'label': 'Bacterial Leaf Blight'},
      {'name': 'grassyStunt', 'label': 'Grassy Stunt'},
      {'name': 'falseSmut', 'label': 'False Smut'},
      {'name': 'bakanae', 'label': 'Bakanae'},
      {'name': 'bacterialLeafStreak', 'label': 'Bacterial Leaf Streak'},
      {'name': 'narrowBrownSpot', 'label': 'Narrow Brown Spot'},
      {'name': 'brownSpot', 'label': 'Brown Spot'},
      {'name': 'redStripe', 'label': 'Red Stripe'},
      {'name': 'leafScald', 'label': 'Leaf Scald'},
      {'name': 'riceTungro', 'label': 'Rice Tungro'},
      {'name': 'orangeLeaf', 'label': 'Orange Leaf'},
      {'name': 'riceRaggedStunt', 'label': 'Rice Ragged Stunt'},
      {'name': 'dirtyPanicle', 'label': 'Dirty Panicle'},
      {'name': 'akiochi', 'label': 'Akiochi'},
      {'name': 'rootKnot', 'label': 'Root Knot'},
      {'name': 'stemRot', 'label': 'Stem Rot'},
      {'name': 'gallDwarf', 'label': 'Gall Dwarf'},
      {'name': 'yellowDwarf', 'label': 'Yellow Dwarf'},
      {'name': 'riceBlast', 'label': 'Rice Blast'}
    ];
    console.log('data',this.props.data);
    console.log('rice-data',this.props.expert.data);
    return (
      <div>
        <div className="divider"></div>
        {
          this.props.expert.data.map((rice,index)=>(
            <div key={index}>
              <div  className="card">
                <div className="row card-content">
                  <table key="rice" className="highlight centered bordered responsive-table">
                    <thead className="teal accent-4">
                      <tr>
                        <th className="white-text">Rice Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="center" key="type">
                          {rice.Rice}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <label>Location</label>
                  <table key="location" className="highlight centered bordered responsive-table">
                    <thead className="teal accent-4">
                      <tr className="white-text">
                        <th>Province</th>
                        <th>District</th>
                        <th>Sub-District</th>
                      </tr>
                    </thead>
                    <tbody className="center">
                      <tr>
                        <td className="center" key="province">
                          {
                            rice.Province?
                              <span>{getProvince(rice.Province,"api")}</span>
                            :
                            <span>{getProvince(this.props.data[2].value,"dat")}</span>
                          }
                        </td>
                        <td className="center" key="district">
                          {
                            rice.Disrict?
                              <span>{getDistinct(rice.Disrict,"api")}</span>
                            :
                            <span>{getDistinct(this.props.data[3].value,"dat")}</span>
                          }
                        </td>
                        <td className="center" key="subdis">
                          {
                            rice.SubDis?
                              <span>{getSubDistrict(rice.SubDis,"api")}</span>
                            :
                            <span>{getSubDistrict(this.props.data[4].value,"dat")}</span>
                          }
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <label>Properties</label>
                  <table key="prop" className="highlight bordered centered responsive-table">
                    <thead className="teal accent-4">
                      <tr className="white-text">
                        <th>Rice Type</th>
                        <th>Suitable Season</th>
                        <th>Photo Period</th>
                      </tr>
                    </thead>
                    <tbody className="center">
                      <tr>
                        <td className="center" key="type">
                          {
                            rice.RiceType?
                              <span>{getRiceType(rice.RiceType)}</span>
                            :
                            <span>{getRiceType(this.props.data[0].value)}</span>
                          }
                        </td>
                        <td className="center" key="season">
                          {
                            rice.Season?
                              <span>{getSeason(rice.Season)}</span>
                            :
                            <span>{getSeason(this.props.data[1].value)}</span>
                          }
                        </td>
                        <td className="center" key="sensitivity">
                          {
                            rice.PhotoPeriod?
                              <span>{getSensitivity(rice.PhotoPeriod)}</span>
                            :
                            <span>{getSensitivity(this.props.data[8].value)}</span>
                          }
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <label>Market</label>
                  <table key="market" className="highlight centered bordered responsive-table">
                    <thead className="teal accent-4">
                      <tr className="white-text">
                        <th>Sell Place</th>
                        <th>Humidity</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody className="center">
                      <tr>
                        <td className="center" key="sell">
                          {
                            rice.SellPlace?
                              <span>{getProvince(rice.SellPlace)}</span>
                            :
                            <span>{getProvince(this.props.data[6].value)}</span>
                          }
                        </td>
                        <td className="center" key="humidity">
                          {
                            rice.Humidity?
                              <span>{rice.Humidity} %</span>
                            :
                            <span>{this.props.data[7].value} %</span>
                          }
                        </td>
                        <td className="center" key="price">
                          {
                            rice.Price?
                              <span>{rice.Price}</span>
                            :
                            <span>{this.props.data[5].value}</span>
                          }
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="card-action">
                  <label>Pests</label>
                  <div className="row">
                    {pests.map((pest)=>(
                      <div key={"pest"+pests.indexOf(pest)} className="col s4">
                        {
                          rice[pest.name.charAt(0).toUpperCase()+pest.name.substring(1,pest.name.length)]?
                            <span>
                              {rice[pest.name.charAt(0).toUpperCase()+pest.name.substring(1,pest.name.length)]=='true'?
                                <span><i className="material-icons green-text">done</i></span>
                                :
                                <span><i className="material-icons red-text">clear</i></span>
                              }
                            </span>
                          :
                          <span>
                            <span><i className="material-icons green-text">done</i></span>
                          </span>
                        }
                        <span>{pest.label}</span>
                      </div>
                      ))
                    }
                  </div>
                  <label>Disease</label>
                  <div className="row">
                    {
                      diseases.map((disease)=>(
                        <div key={"disease"+diseases.indexOf(disease)} className="col s4">
                          {
                            rice[disease.name.charAt(0).toUpperCase()+disease.name.substring(1,disease.name.length)]?
                              <span>
                                {rice[disease.name.charAt(0).toUpperCase()+disease.name.substring(1,disease.name.length)]=='true'?
                                  <span><i className="material-icons green-text">done</i></span>
                                  :
                                  <span><i className="material-icons red-text">clear</i></span>
                                }
                              </span>
                            :
                            <span>
                              <i className="material-icons green">done</i>
                            </span>
                          }
                          <span>{disease.label}</span>
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
  )
}
}
const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Expert);
