import React, { Component } from 'react'
import Select from 'react-select'
import {Form,
  FormGroup,
  FormControl,
  ControlLabel,
  DropdownButton,
  MenuItem,
  Checkbox,
  Button,
  FieldGroup,
  Col,Row} from 'react-bootstrap'
import './Design.scss'
import 'react-select/dist/react-select.css'

export default class Design extends Component {

  constructor(props){
    super(props)
    this.state = {select_size:'350'}
  }

  componentWillMount(){
    this.options = [
      { value: '350', label: '350 ml' },
      { value: '500', label: '500 ml' },
      { value: '600', label: '600 ml' },
      { value: '800', label: '800 ml' },
      { value: '1500', label: '1500 ml'}
    ];
    this.value = '350'
  }

  logChange(val) {
    console.log("Selected: " +val.value)
    this.setState({select_size:val.value})

  }

  render() {
    return (
      <div>
        <br/><br/><br/><br/>
        <span className='design-title'> Design your own bottle</span>

        <div className = 'row'>
          <div className = 'col-md-6'> Picture </div>
          <div className = 'col-md-1'></div>
          <div className = 'col-md-3'>

            <Form horizontal>

            <span className = 'design-text'>Name</span>
            <FormGroup>
                <FormControl
                type="text"
                ref="input_name"
                label="Name"
                placeholder="Name..."
                />
            </FormGroup>

            <span className = 'design-text'>Size</span>
            <FormGroup>
              <Select
              name="form-field-name"
              clearable = {false}
              value={this.state.select_size}
              options={this.options}
              onChange={this.logChange.bind(this)}
            />
            </FormGroup>

            <span className = 'design-text'>Banner</span>
            <FormGroup>
                <FormControl
                type="text"
                ref="input_name"
                label="Name"
                placeholder="Name..."
                />
            </FormGroup>

            <span className = 'design-text'>Logo</span>
            <FormGroup>
                <FormControl
                type="text"
                ref="input_name"
                label="Name"
                placeholder="Name..."
                />
            </FormGroup>

            <span className = 'design-text'>or</span>
            <FormGroup>
                <div className = 'upload-container  input-group'>
                <input type="text" className="form-control" placeholder="Upload Logo..."/>
                <span className="input-group-btn">
                  <button className="btn btn-warning" type="button">Upload</button>
                </span>
                </div>
            </FormGroup>

{/*
   <div class="input-group">
     <input type="text" class="form-control" placeholder="Search for...">
     <span class="input-group-btn">
       <button class="btn btn-default" type="button">Go!</button>
     </span>
   </div> */}


            </Form>
          </div>
        </div>

      </div>
    )
  }
}
