import React from 'react';
import StatsDiv from "./statsDiv";
import './../css/IndividualStats.css'

class IndividualStats extends React.Component {


    render(){
        return (
          <div id="content">
            <div className="statsOfDiv">
              <p className="statsOfP">iTalk</p>
            </div>
            <StatsDiv class="kills" title="KILLS" val="16,32" rank="LEGEND" />
            <StatsDiv class="kd" title="KD" val="2.34" rank="LEGEND" />
            <StatsDiv class="wins" title="WINS" val="10" rank="LEGEND" />
          </div>
        );
    }
}

export default IndividualStats;