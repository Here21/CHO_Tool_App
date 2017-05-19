import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const BodyDataCard = ({ img, title, content, extra }) => (
  <div className="body-data-card">
    <p>2017-03-26</p>
    <div className="data-card-content">
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
  </div>
);

BodyDataCard.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.node,
  extra: PropTypes.node,
};

export default BodyDataCard;
