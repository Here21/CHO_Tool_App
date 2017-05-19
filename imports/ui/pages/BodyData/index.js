import React, { Component } from 'react';
import BodyDataCard from '../../components/BodyDataCard';

import './style.scss';


class BodyData extends Component {
  render() {
    return (
      <div className="body-page">
        <div className="top-part">
          <div className="shadow">
            <img src="" alt=""/>
          </div>
          <button>添加计划</button>
        </div>
        <BodyDataCard />
        <BodyDataCard />
        <BodyDataCard />
        <BodyDataCard />
      </div>
    );
  }
}

export default BodyData;
