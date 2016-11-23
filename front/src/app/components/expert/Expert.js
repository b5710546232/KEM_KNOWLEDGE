import React, { Component } from 'react';
import { Link } from 'react-router';
import { Input, Button, Table , Row ,Col} from 'react-materialize';
import { loadExpertRiceList } from '../../actions/RiceAction';
import { connect } from 'react-redux';
import SubmitButton from './SubmitButton';

class Expert extends Component {
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
    this.props.loadExpertRice(formData)
  }
  render() {
    const riceInformations = [
      {'name': 'riceName', 'label': 'Rice Name'},
      // {'name': 'otherName', 'label': 'Other Name'},
      {'name': 'riceType', 'label': 'Rice Type'},
      // {'name': 'height', 'label': 'Height'},
      {'name': 'subDis', 'label': 'Sub-District'},
      {'name': 'district', 'label': 'District'},
      {'name': 'province', 'label': 'Province'},
      // {'name': 'age', 'label': 'Age'},
      {'name': 'price', 'label': 'Price'},
      {'name': 'sellPlace', 'label': 'Sell Place'},
      {'name': 'humidity', 'label': 'Humidity'},
      // {'name': 'harvestingPeriod', 'label': 'Harvesting Period'},
      {'name': 'season', 'label': 'Suitable Season'},
      // {'name': 'region', 'label': 'Region'},
      {'name': 'photoPeriod', 'label': 'Photo Period'},
      // {'name': 'ecosystem', 'label': 'Ecosystem'},
      // {'name': 'waterLevel', 'label': 'Water Level'},
      // {'name': 'yield', 'label': 'Yield'},
      // {'name': 'photoPeriod', 'label': 'Photo Period'},
      // {'name': 'diseaseResistance', 'label': 'Disease Resistance'},
      // {'name': 'vulnerableDisease', 'label': 'Vulnerable Disease'},
      // {'name': 'vulnerablePest', 'label': 'Vulnerable Pest'},
      // {'name': 'pestResistance', 'label': 'Pest Resistance'}
    ];
    const riceInputs = riceInformations.map((data, index) =><Input key={index} s={6} type="text" name={data.name} label={data.label}/>);
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
    console.log(this.props.expert);
    return (
      <div className="container">
        <h3 className="light teal-text accent-4">Advance Rice Specification Finder</h3>
        <form id="expert">
          <Row>
            <Col s={12}></Col>
            {riceInputs}
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
          <SubmitButton onSubmit={e => this.onSubmit(e)} />
        </form>
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
