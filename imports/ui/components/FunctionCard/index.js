import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const FunctionCard = ({ img, title, content }) => (
  <div className="function-card">
    <div className="left-part">
      <img src={img} alt="tips"/>
    </div>
    <div className="right-part">
      <p>{title}</p>
      <div>
        {content}
      </div>
    </div>
  </div>
);

FunctionCard.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.node,
};

export default FunctionCard;
