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
          <Link to="/body/form"><button>添加数据</button></Link>
          <Link to="/home"><img className="back-button" src="/icons/back.png" alt="back" /></Link>
        </div>
        {
          this.props.myData.length > 0 ? this.props.myData.map(data =>
            <BodyDataCard
              key={data.date}
              date={data.date}
              weight={data.weight}
              type={data.type}
              BMR={data.bmr}
            />
          ) : <p style={{ marginTop: '60px' }}>您还没有添加数据，请先添加您的身体数据</p>
        }
      </div>
    );
  }
}


BodyData.propTypes = {
  myData: PropTypes.array,
};

export default BodyData;
