import React, { Component } from 'react';
import { Link } from 'react-router';
import { Input, Button, Table } from 'react-materialize';
import { loadRice } from '../../actions/RiceAction';
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
    console.log(formData);
    $.ajax({
        method: "POST",
        url: "#",
        data: formData
    })
    .done(function( data ) {
        //TODO: Show something on screen.
    });
  }
  render() {
    const riceInformations = [
      {'name': 'riceName', 'label': 'Rice Name'}, {'name': 'otherName', 'label': 'Other Name'}, {'name': 'riceType', 'label': 'Rice Type'}, {'name': 'height', 'label': 'Height'},
      {'name': 'age', 'label': 'Age'},
      {'name': 'harvestingPeriod', 'label': 'Harvesting Period'},
      {'name': 'suitableSeason', 'label': 'Suitable Season'},
      {'name': 'region', 'label': 'Region'},
      {'name': 'ecosystem', 'label': 'Ecosystem'},
      {'name': 'waterLevel', 'label': 'Water Level'},
      {'name': 'yield', 'label': 'Yield'},
      {'name': 'photoPeriod', 'label': 'Photo Period'},
      {'name': 'diseaseResistance', 'label': 'Disease Resistance'},
      {'name': 'vulnerableDisease', 'label': 'Vulnerable Disease'},
      {'name': 'vulnerablePest', 'label': 'Vulnerable Pest'},
      {'name': 'pestResistance', 'label': 'Pest Resistance'}
    ];
    const riceInputs = riceInformations.map((data, index) =>
    <Input key={index} s={12} type="text" name={data.name} label={data.label} />);
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
      {'name': 'riceBug', 'label': 'Rice Bug'}];
    const pestCheckboxes = pests.map((data, index) =>  <Input s={12} type="checkbox" name="pestGroup" value={data.name} label={data.label} key={index} />);
    const diseases = [
      {'name': 'SeedlingRotInNurseyBox', 'label': 'SeedlingRotInNurseyBox'},
      {'name': 'SheathRot', 'label': 'SheathRot'},
      {'name': 'SheathBlight', 'label': 'SheathBlight'},
      {'name': 'BacterialLeafBlight', 'label': 'BacterialLeafBlight'},
      {'name': 'GrassyStunt', 'label': 'GrassyStunt'},
      {'name': 'FalseSmut', 'label': 'FalseSmut'},
      {'name': 'Bakanae', 'label': 'Bakanae'},
      {'name': 'BacterialLeafStreak', 'label': 'BacterialLeafStreak'},
      {'name': 'NarrowBrownSpot', 'label': 'NarrowBrownSpot'},
      {'name': 'BrownSpot', 'label': 'BrownSpot'},
      {'name': 'RedStripe', 'label': 'RedStripe'},
      {'name': 'LeafScald', 'label': 'LeafScald'},
      {'name': 'RiceTungro', 'label': 'RiceTungro'},
      {'name': 'OrangeLeaf', 'label': 'OrangeLeaf'},
      {'name': 'RiceRaggedStunt', 'label': 'RiceRaggedStunt'},
      {'name': 'DirtyPanicle', 'label': 'DirtyPanicle'},
      {'name': 'Akiochi', 'label': 'Akiochi'},
      {'name': 'RootKnot', 'label': 'RootKnot'},
      {'name': 'StemRot', 'label': 'StemRot'},
      {'name': 'GallDwarf', 'label': 'GallDwarf'},
      {'name': 'YellowDwarf', 'label': 'YellowDwarf'},
      {'name': 'RiceBlast', 'label': 'RiceBlast'}];
    const diseaseCheckboxes = diseases.map((data, index) => <Input s={12} type="checkbox" name="diseaseGroup" value={data.name} label={data.label} key={index} />);
    return (
      <div className="container">
        <form id="expert">
          {riceInputs}
          <div className="pests">
            <label>Pests</label>
            {pestCheckboxes}
          </div>
          <div className="diseases">
            <label>Disease</label>
            {diseaseCheckboxes}
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
    loadRice: (data) => {
      dispatch(loadRice(data))
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Expert);
