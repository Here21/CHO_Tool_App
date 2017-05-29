import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import BodyDataCard from '../../components/BodyDataCard';

import './style.scss';


class BodyData extends Component {
  render() {
    console.log(this.props.myData);
    return (
      <div className="body-page">
        <div className="top-part">
          <div className="shadow">
            <img src="" alt=""/>
          </div>
          <Link to="/body/form"><button>添加计划</button></Link>
        </div>
        {
          this.props.myData.map(data =>
            <BodyDataCard key={data.date} date={data.date} weight={data.weight} type={data.type} BMR={data.bmr} />
          )
        }
      </div>
    );
  }
}


BodyData.propTypes = {
  myData: PropTypes.array,
};

export default BodyData;
