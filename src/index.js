import React from 'react';
import ReactDOM from 'react-dom';
import IndividualStats from './components/IndividualStats';
// import SearchBar from './SearchBar';
import NavBar from './components/NavBar';

import './css/Body.css';
class App extends React.Component {
    
    state = { searchItem: ''};

    componentDidMount (){

    }
    render (){
        return (
          <div>
            <NavBar/>
            <IndividualStats/>
          </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));