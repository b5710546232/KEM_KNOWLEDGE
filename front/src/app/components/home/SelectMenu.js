import React, { Component } from 'react'
class SelectMenu extends Component {
  componentDidMount(){
    $('#rice-collection').material_select()
  }
  render(){
    return (
      <div className="input-field col s12">
        <select id="rice-collection" onChange={()=>this.props.handleChange()}>
          <option value="simple">All Rice Variety in {this.props.location.sub_district}</option>
          <option value="price" >Best Price Rice Variety in {this.props.location.sub_district}</option>
          <option value="yeild" >Best Yeild Rice Variety in {this.props.location.sub_district}</option>
        </select>
        <label>Select Rice Variety Collection</label>
      </div>
    )
  }
}
export default SelectMenu;
