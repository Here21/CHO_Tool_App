import React, { Component } from 'react';
import FunctionCard from '../../components/FunctionCard';

import './style.scss';

const cardContent = (
  <div>
    <div>
      <span style={{ marginRight: '3px', fontSize: '9px' }}>剩余</span>
      <span style={{ fontSize: '32px', verticalAlign: 'middle' }}>31</span>
      <span style={{ verticalAlign: 'super', fontSize: '9px' }}>次</span>
    </div>
    <div>
      <span style={{ marginRight: '3px', fontSize: '9px' }}>剩余</span>
      <span style={{ fontSize: '32px', verticalAlign: 'middle' }}>31</span>
      <span style={{ verticalAlign: 'super', fontSize: '9px' }}>次</span>
    </div>
    <div>
      <span style={{ marginRight: '3px', fontSize: '9px' }}>剩余</span>
      <span style={{ fontSize: '32px', verticalAlign: 'middle' }}>31</span>
      <span style={{ verticalAlign: 'super', fontSize: '9px' }}>次</span>
    </div>
  </div>
);

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
        <FunctionCard />
        <FunctionCard
          img="http://op99wrlxr.bkt.clouddn.com/image/icons/plan_64.png"
          title="碳氢氧计划"
          content={
            cardContent
          }
        />
      </div>
    );
  }
}

export default BodyData;
