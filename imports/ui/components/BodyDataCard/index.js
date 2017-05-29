import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './style.scss';

const BodyDataCard = ({ date, weight, type, BMR }) => (
  <div className="body-data-card">
    <p>{moment(date).format('YYYY-MM-DD')}</p>
    <div className="data-card-content">
      <div>
        <span style={{ marginRight: '3px', fontSize: '9px' }}>体重</span>
        <span style={{ fontSize: '32px', verticalAlign: 'middle' }}>{weight}</span>
        <span style={{ verticalAlign: 'super', fontSize: '9px' }}>KG</span>
      </div>
      <div>
        <span style={{ marginRight: '3px', fontSize: '9px' }}>系数</span>
        <span style={{ fontSize: '32px', verticalAlign: 'middle' }}>{type}</span>
        <span style={{ verticalAlign: 'super', fontSize: '9px' }}>T</span>
      </div>
      <div>
        <span style={{ marginRight: '3px', fontSize: '9px' }}>基带</span>
        <span style={{ fontSize: '32px', verticalAlign: 'middle' }}>{BMR}</span>
        <span style={{ verticalAlign: 'super', fontSize: '9px' }}>K</span>
      </div>
    </div>
  </div>
);

BodyDataCard.propTypes = {
  date: PropTypes.instanceOf(Date),
  weight: PropTypes.number,
  type: PropTypes.number,
  BMR: PropTypes.number,
};

export default BodyDataCard;
