import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const FunctionCard = ({ img, title, content, extra }) => (
  <div className="function-card">
    <div className="left-part">
      <img src={img} alt="tips"/>
    </div>
    <div className="middle-part">
      <p>{title}</p>
      <div>
        {content}
      </div>
    </div>
    <div className="right-part">
      {extra}
    </div>
  </div>
);

FunctionCard.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.node,
  extra: PropTypes.node,
};

export default FunctionCard;
