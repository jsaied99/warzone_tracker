import React from 'react';
import './../css/NavBar.css';

class NavBar extends React.Component {

    render (){
        return (
          <div className='navBar'>
            <a href="/">
              <div className="iconDiv">
                <i
                  id="homeIcon"
                  className="activated myIcons fas fa-home fa-2x Home"
                ></i>
                <span
                  className="activated myIcons nav-item-label"
                  id="homeLabel"
                >
                  Home
                </span>
              </div>
            </a>
          </div>
        );
    }
}

export default NavBar;