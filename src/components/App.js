import React from 'react';
import axios from "axios";
import IndividualStats from './IndividualStats';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import { v4 as uuid_v4 } from "uuid";
class App extends React.Component {
  state = { searchItem: "" };
  async onSearchSubmit(term){
    var username = "iTalk%2311213";
    var platform = "battle";
    // var options = {
    //     method: "GET",
    //     url:
    //       "https://call-of-duty-modern-warfare.p.rapidapi.com/warzone/"+ username +"/" + platform +"",
    //     headers: {
    //       "x-rapidapi-key": "0a1449c97fmshc98d54f2a209dfbp175d54jsn1408a1529a02",
    //       "x-rapidapi-host": "call-of-duty-modern-warfare.p.rapidapi.com",
    //     },
    // };

    // const response = await axios(options);
    // console.log(response);

    //   let config = {
    //     headers: {
    //       "Access-Control-Allow-Origin": "*",
    //     },
    //   };

    // let data = {
    //   deviceId: "60c2d7e6422470c3a924d6063dfc642b",
    // };

    // const response = await axios.post(
    //   "https://profile.callofduty.com/cod/mapp/registerDevice",
    //   {
    //     crossdomain: true,
    //     withCredentials: true,
    //     "Access-Control-Allow-Origin": "*",
    //   },
    //   config
    // );
    // console.log(response);

    var request = require("request");
    var options = {
      method: "GET",
      url: "https://my.callofduty.com/api/papi-client/crm/cod/v2/platform/uno/username/Huskerrs/search",
      headers: {
        "X-CSRF-TOKEN": uuid_v4(),
        Cookie:
          "API_CSRF_TOKEN=" +
          uuid_v4() +
          "; ACT_SSO_COOKIE=OTE5MDI5Njk4NTEzNzg0MDUyNToxNjIyOTEzNzM0NjI2OjVhMmM4MDBlMzlmZjQwNjY0YWM3Y2JhOTY5NzUwYTll; ACT_SSO_COOKIE_EXPIRY=1622913734626; atkn=eyJhbGciOiAiQTEyOEtXIiwgImVuYyI6ICJBMTI4R0NNIiwgImtpZCI6ICJ1bm9fcHJvZF9sYXNfMSJ9.qFIobG7MNCJmwUZry3v_ZJkq8KQuPF0gsYoj40B6AcqsFHllTL7bgA.LMg5vw60MrWfno4t.dH5biZ3H4c7M4QHFHFAMyQ20PtQUGeUbhQLCgLjt0iMdd2fJieI5DpT8VogyJwMMtgFLAu1wJHn2rf_KFkAfm5Tcsi4--Bn3EcVPoGYzP8oQmVUNLd0YjgqBoWkHQ_7KbVySsZTMN3YAwq5LElrdRO49eITZsp1h5645po6u-9bXbkBhRltVY6RFycxW0WupurVPSFdZvlngOFYWhls9WREIFMgqP9tVbdn6-X-jPDpGSu5M1XVY9N3LxT8QdKArwRrPiUV8WldNHBt7CLg-EQPnjAH18f2M5uEhJ6hZ9wFgOnfKTs7CnxUIbYTLLAJlhZUFfeyqATd11bMLkD9980mmrMnzJyfDnG-Y-Ys6TTMpFgRXr2jf0qJ0k2PDCzV5w2TPXocy2JYw17kRnGApDfJ-TWgq3WMoyTPoZcZtycvXX-IyCDD77rzRkVR00Hcp3Mcu7Q-exwxXb1AwJYCvq7vz.5AcDwTNS4KDIAJkMcbnfGQ;",
      },
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
    });


  }
  render() {
    return (
      <div>
        {/* <NavBar /> */}
        <SearchBar onSubmit={this.onSearchSubmit}/>
        {/* <IndividualStats /> */}
      </div>
    );
  }
}

export default App;