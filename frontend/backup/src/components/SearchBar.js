import React, {Component} from 'react';

const SearchBar = () =>(
  <div>
    <div className="input-group">
      <input type="text" className="form-control" placeholder="Search for..."/>
      <span className="input-group-btn">
        <button className="btn btn-default" type="button">Go!</button>
      </span>
    </div>
  </div>
)
export default SearchBar
