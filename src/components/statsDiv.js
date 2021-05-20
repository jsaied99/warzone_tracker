import React from 'react';
import './../css/StatsDiv.css';

class StatsDiv extends React.Component {
    render (){
        return (
          <div className={this.props.class + " statsDiv"}>
            <div>
              <p>{this.props.title}</p>
            </div>

            <div className={this.props.class + " valueDiv"}>
              <p className={this.props.class + "P"}>{this.props.val}</p>
            </div>

            <div className='rankDiv'>
              <p className='rankP'>{this.props.rank}</p>
            </div>
          </div>
        );
    }

}

export default StatsDiv;