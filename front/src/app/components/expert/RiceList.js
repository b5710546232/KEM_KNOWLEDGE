import React, { Component } from 'react';
import { Input, Button, Table , Row ,Col} from 'react-materialize';
import { connect } from 'react-redux';

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
    return (
      <div>
        <div className="divider"></div>
        {
          this.props.expert.map((rice)=>(
            <div>
              <div className="row">
                <div className="col s6">
                  <div className="row">
                    <div className="col s6">
                      <span>Rice Name : </span>
                    </div>
                    <div className="col s6">
                      <span>{rice.Rice}</span>
                    </div>
                  </div>
                </div>
                <div className="col s6">
                  <div className="row">
                    <div className="col s6">
                      <span>Rice Type : </span>
                    </div>
                    <div className="col s6">
                      {
                        rice.RiceType?
                          <span>{rice.RiceType}</span>
                        :
                        <span>{this.props.data[0].value}</span>
                      }
                    </div>
                  </div>
                </div>
                <div className="col s6">
                  <div className="row">
                    <div className="col s6">
                      <span>Sub-District : </span>
                    </div>
                    <div className="col s6">
                      {
                        rice.SubDis?
                          <span>{rice.SubDis}</span>
                        :
                        <span>{this.props.data[1].value}</span>
                      }
                    </div>
                  </div>
                </div>
                <div className="col s6">
                  <div className="row">
                    <div className="col s6">
                      <span>District : </span>
                    </div>
                    <div className="col s6">
                      {
                        rice.Disrict?
                          <span>{rice.Disrict}</span>
                        :
                        <span>{this.props.data[2].value}</span>
                      }
                    </div>
                  </div>
                </div>
                <div className="col s6">
                  <div className="row">
                    <div className="col s6">
                      <span>Province : </span>
                    </div>
                    <div className="col s6">
                      {
                        rice.Province?
                          <span>{rice.Province}</span>
                        :
                        <span>{this.props.data[3].value}</span>
                      }
                    </div>
                  </div>
                </div>
                <div className="col s6">
                  <div className="row">
                    <div className="col s6">
                      <span>Price : </span>
                    </div>
                    <div className="col s6">
                      {
                        rice.Price?
                          <span>{rice.Price}</span>
                        :
                        <span>{this.props.data[4].value}</span>
                      }
                    </div>
                  </div>
                </div>
                <div className="col s6">
                  <div className="row">
                    <div className="col s6">
                      <span>Sell Place : </span>
                    </div>
                    <div className="col s6">
                      {
                        rice.SellPlace?
                          <span>{rice.SellPlace}</span>
                        :
                        <span>{this.props.data[5].value}</span>
                      }
                    </div>
                  </div>
                </div>
                <div className="col s6">
                  <div className="row">
                    <div className="col s6">
                      <span>Humidity : </span>
                    </div>
                    <div className="col s6">
                      {
                        rice.Humidity?
                          <span>{rice.Humidity}</span>
                        :
                        <span>{this.props.data[6].value}</span>
                      }
                    </div>
                  </div>
                </div>
                <div className="col s6">
                  <div className="row">
                    <div className="col s6">
                      <span>Suitable Season : </span>
                    </div>
                    <div className="col s6">
                      {
                        rice.Season?
                          <span>{rice.Season}</span>
                        :
                        <span>{this.props.data[7].value}</span>
                      }
                    </div>
                  </div>
                </div>
                <div className="col s6">
                  <div className="row">
                    <div className="col s6">
                      <span>Photo Period : </span>
                    </div>
                    <div className="col s6">
                      {
                        rice.PhotoPeriod?
                          <span>{rice.PhotoPeriod}</span>
                        :
                        <span>{this.props.data[8].value}</span>
                      }
                    </div>
                  </div>
                </div>
              </div>
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
              <div className="divider"></div>
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
