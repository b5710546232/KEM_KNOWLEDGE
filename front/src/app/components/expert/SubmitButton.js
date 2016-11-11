import React, { Component } from 'react';
import { Button } from 'react-materialize';

export default class SubmitButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Button className="btn waves-effect waves-light" waves="light" type="submit" onClick={this.props.onSubmit}>
        Submit
        <i className="material-icons right">send</i>
      </Button>
    );
  }
}
