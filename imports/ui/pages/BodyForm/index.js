import React, { Component } from 'react';
import './style.scss';

class BodyData extends Component {
  render() {
    return (
      <div className="body-form-page">
        <div className="top-part">
          <div className="shadow">
            <img src="" alt=""/>
          </div>
        </div>
        <div className="form-content">
          <div className="form-input">
            <label htmlFor="code">身高</label>
            <input
              id="code"
              placeholder="身高"
              onChange={() => {}}
            />
          </div>
          <div className="form-input">
            <label htmlFor="code">身高</label>
            <input
              id="code"
              placeholder="身高"
              onChange={() => {}}
            />
          </div>
          <div className="form-input">
            <label htmlFor="code">身高</label>
            <input
              id="code"
              placeholder="身高"
              onChange={() => {}}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default BodyData;
