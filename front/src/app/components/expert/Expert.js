import React, { Component } from 'react';
import { Link } from 'react-router';
import { Input, Button, Table } from 'react-materialize';
import { loadRice } from '../../actions/RiceAction';
import { connect } from 'react-redux';
import SubmitButton from './SubmitButton';

class Expert extends Component {
  constructor(props) {
    super(props);
  }
  onSubmit(event) {
    console.log($(":input").serializeArray());
    event.preventDefault();
  }
  render() {
    return (
      <div className="container">
        <form>
          <Input s={12} type="text" name="riceName" label="Rice Name" />
          <Input s={12} type="text" name="otherName" label="Other Name" />
          <Input s={12} type="text" name="riceType" label="Rice Type" />
          <Input s={12} type="text" name="height" label="Height" />
          <Input s={12} type="text" name="age" label="Age" />
          <Input s={12} type="text" name="harvestingPeriod" label="Harvesting Period" />
          <Input s={12} type="text" name="suitableSeason" label="Suitable Season" />
          <Input s={12} type="text" name="region" label="Region" />
          <Input s={12} type="text" name="ecosystem" label="Ecosystem" />
          <Input s={12} type="text" name="waterLevel" label="Water Level" />
          <Input s={12} type="text" name="yield" label="Yield" />
          <Input s={12} type="text" name="photoPeriod" label="Photo Period" />
          <Input s={12} type="text" name="diseaseResistance" label="Disease Resistance" />
          <Input s={12} type="text" name="vulnerableDisease" label="Vulnerable Disease" />
          <Input s={12} type="text" name="vulnerablePest" label="Vulnerable Pest" />
          <Input s={12} type="text" name="pestResistance" label="Pest Resistance" />
          <SubmitButton onSubmit={e => this.onSubmit(e)} />
        </form>
      </div>
    );
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
export default connect(mapStateToProps,mapDispatchToProps)(Expert)
