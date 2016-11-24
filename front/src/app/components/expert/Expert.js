import React, { Component } from 'react';
import { Link } from 'react-router';
import { Input, Button, Table , Row ,Col} from 'react-materialize';
import { loadExpertRiceList } from '../../actions/RiceAction';
import { connect } from 'react-redux';
import RiceList from './RiceList'
import SubmitButton from './SubmitButton';
import ProvinceJSON from '../../../assets/json/province.json'
import '../../../assets/scss/overlay.scss'
class Expert extends Component {
  constructor(props){
    super(props)
    this.state = {
      data : []
    }
  }
  onSubmit(event) {
    const inputs = $('form').serializeArray();
    let array = inputs.slice();
    event.preventDefault();
    let formData = {};
    array.forEach((data) => {
      if(data.name === 'diseaseGroup' || data.name === 'pestGroup') {
        if(!formData[data.name]) {
          formData[data.name] = [data.value];
        } else {
          formData[data.name].push(data.value);
        }
      } else {
        formData[data.name] = data.value;
      }
    });
    if (!formData['diseaseGroup']) {
      formData['diseaseGroup'] = []
    }
    if (!formData['pestGroup']) {
      formData['pestGroup'] = []
    }
    this.setState({
      data:array
    })
    this.props.loadExpertRice(formData)
  }
  getData(){
    return this.data
  }
  render() {
    const riceInformations = [
      // {'name': 'riceName', 'label': 'Rice Name'},
      // {'name': 'otherName', 'label': 'Other Name'},
      // {'name': 'height', 'label': 'Height'},
      {'name': 'subDis', 'label': 'Sub-District',length:4},
      {'name': 'district', 'label': 'District',length:4},
      // {'name': 'province', 'label': 'Province',length:4},
      // {'name': 'age', 'label': 'Age'},
      // {'name': 'price', 'label': 'Price',length:6},
      // {'name': 'sellPlace', 'label': 'Sell Place',length:6},
      // {'name': 'humidity', 'label': 'Humidity',length:6},
      // {'name': 'harvestingPeriod', 'label': 'Harvesting Period'},
      // {'name': 'season', 'label': 'Suitable Season'},
      // {'name': 'region', 'label': 'Region'},
      // {'name': 'photoPeriod', 'label': 'Photo Period'},
      // {'name': 'ecosystem', 'label': 'Ecosystem'},
      // {'name': 'waterLevel', 'label': 'Water Level'},
      // {'name': 'yield', 'label': 'Yield'},
      // {'name': 'photoPeriod', 'label': 'Photo Period'},
      // {'name': 'diseaseResistance', 'label': 'Disease Resistance'},
      // {'name': 'vulnerableDisease', 'label': 'Vulnerable Disease'},
      // {'name': 'vulnerablePest', 'label': 'Vulnerable Pest'},
      // {'name': 'pestResistance', 'label': 'Pest Resistance'}
    ];
    const riceInputs = riceInformations.map((data, index) =><Input key={index} s={data.length} type="text" name={data.name} label={data.label}/>);
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
    const pestCheckboxes = pests.map((data, index) => <Input s={4} type="checkbox" name="pestGroup" value={data.name} label={data.label} key={index} />);
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
    const diseaseCheckboxes = diseases.map((data, index) => <Input s={4} type="checkbox" name="diseaseGroup" value={data.name} label={data.label} key={index} />);
    return (
      <div className="container">
        {!this.props.expert.success?
          <div>
            <div className="custom-overlay"></div>
            <div className="custom-overlay-component">
              <div className="component">
                <div className="preloader-wrapper big active">
                  <div className="spinner-layer spinner-blue">
                    <div className="circle-clipper left">
                      <div className="circle"></div>
                    </div><div className="gap-patch">
                      <div className="circle"></div>
                    </div><div className="circle-clipper right">
                      <div className="circle"></div>
                    </div>
                  </div>

                  <div className="spinner-layer spinner-red">
                    <div className="circle-clipper left">
                      <div className="circle"></div>
                    </div><div className="gap-patch">
                      <div className="circle"></div>
                    </div><div className="circle-clipper right">
                      <div className="circle"></div>
                    </div>
                  </div>

                  <div className="spinner-layer spinner-yellow">
                    <div className="circle-clipper left">
                      <div className="circle"></div>
                    </div><div className="gap-patch">
                      <div className="circle"></div>
                    </div><div className="circle-clipper right">
                      <div className="circle"></div>
                    </div>
                  </div>

                  <div className="spinner-layer spinner-green">
                    <div className="circle-clipper left">
                      <div className="circle"></div>
                    </div><div className="gap-patch">
                      <div className="circle"></div>
                    </div><div className="circle-clipper right">
                      <div className="circle"></div>
                    </div>
                  </div>
                </div>
                <div className="teal-text accent-4 center">Fetching Data</div>
              </div>

            </div>

          </div>:<div></div>
          }
        <h3 className="light teal-text accent-4">Advance Rice Specification Finder</h3>
        <form id="expert">
          <Row>
            <Col s={12}></Col>
            <Input s={6} name="riceType" type="select" label="Rice Type">
              <option value=''>Any Type</option>
              <option value='glutinous'>Glutinous</option>
              <option value='nonGlutinous'>Non-Glutinous</option>
            </Input>
            <Input s={6} name="season" type='select' label="Suitable Season">
              <option value=''>Any Season</option>
              <option value='inSeason'>In Season</option>
              <option value='doubleCrop'>Double Crop</option>
            </Input>
            {riceInputs}
            <Input s={4} name="province" type='select' label="Province">
              <option value=''>Any Province</option>
              {
                ProvinceJSON.map((province)=>(
                  <option value={province.lowername}>{province.name}</option>
                ))
              }
            </Input>
            <Input  s={6} type="number" name="price" label="Price"/>
            <Input s={6} name="sellPlace" type='select' label="Sell Place">
              <option value=''>Any Sell Place</option>
              {
                ProvinceJSON.map((province)=>(
                <option value={province.lowername}>{province.name}</option>
                ))
              }
            </Input>
            <Input  s={6} type="number" name="humidity" label="Humidity"/>
            <Input s={6} name="photoPeriod" type='select' label="Photo Period">
              <option value=''>Any Sensitivity</option>
              <option value='sensitivity'>Sensitivity</option>
              <option value='nonSensitivity'>Non-Sensitivity</option>
            </Input>
          </Row>
          <div className="pests">
            <label>Pests</label>
            <Row>
              {pestCheckboxes}
            </Row>
          </div>
          <div className="diseases">
            <label>Disease</label>
            <Row>
              {diseaseCheckboxes}
            </Row>
          </div>
          <Row>
            <SubmitButton onSubmit={e => this.onSubmit(e)} />
          </Row>
        </form>
        {this.props.expert?
          <RiceList
            data={this.state.data}
          />:
          <div></div>
          }
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadExpertRice: (data) => {
      dispatch(loadExpertRiceList(data))
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Expert);
