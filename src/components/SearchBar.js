import React from 'react';
import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.css'; 
import './../css/SearchBar.css';
// import FontAwesome from 'react-fontawesome';
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class SearchBar extends React.Component {

  input_change (e){
    console.log(e.target.value);
  }

  onFormSubmit = (event) =>{
    event.preventDefault();

    this.props.onSubmit(this.state.password);
  }
  state = {password : ''};
  render (){
    return (
      <div className="input-group rounded">
        <form onSubmit={this.onFormSubmit}>
          <input
            type="search"
            className="form-control rounded"
            id="searchButton"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
            value={this.state.password}
            onChange={(e) => {
              this.setState({ password: e.target.value });
            }}
          />
        </form>
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