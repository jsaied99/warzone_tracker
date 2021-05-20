import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css'; 
import './SearchBar.css';
// import FontAwesome from 'react-fontawesome';
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class SearchBar extends React.Component {


  input_change (e){
    console.log(e.target.value);
  }
  render (){
    return (
      <div className="input-group rounded">
        <input
          type="search"
          className="form-control rounded"
          id="searchButton"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
          onChange={this.input_change}
        />
        <span className="input-group-text border-0" id="search-addon">
          <a className="btn" href="https://codstatistics.com/">
            <i className="fas fa-search"></i>
          </a>
        </span>
      </div>
    );
  }
}

export default SearchBar; 