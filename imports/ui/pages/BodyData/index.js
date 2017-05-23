import React, { Component } from 'react';
import { Link } from 'react-router';
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
          <Link to="/body/form"><button>添加计划</button></Link>
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
