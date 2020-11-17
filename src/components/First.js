import React, { Component } from 'react';
import picture from './img/picture.svg';
import { Link } from "react-router-dom";

class Test extends Component {
  render() {
    return (
      <div className="second_content">
        <div className="background"></div>
        <div className="first_content">
          <img className="hand" src={picture} alt=""></img>
          <div className="first_content_1">
            <h1>Who wants to be a millionaire?</h1>
            <Link to='/App' className="start_button">
              Start
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Test;