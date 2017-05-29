import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import FunctionCard from '../../components/FunctionCard';
import './style.scss';

class HomePage extends Component {
  componentDidMount() {
  }

  // addPlan() {
  //   Meteor.call('plans.change', this.props.currentUser.username);
  // }

  render() {
    const user = this.props.currentUser;
    return (
      <div className="home-page">
        <div className="home-page-userinfo">
          <img src={user.profile.headimgurl} alt="avatar"/>
          <p>{user.profile.nickname}</p>
        </div>
        <div>
          <FunctionCard
            img="http://op99wrlxr.bkt.clouddn.com/image/icons/hot.png"
            title="碳氢氧健康Tips"
            content={
              <div style={{ lineHeight: '20px', paddingRight: '8px' }}>
                无论是减脂还是增肌，最重要的部分始终是调整饮食结构，因为只有科学控制摄入，才能合理体现付出
              </div>
            }
          />
          <FunctionCard
            img="http://op99wrlxr.bkt.clouddn.com/image/icons/form_64.png"
            title="身体数据"
            content={
              <div style={{ lineHeight: '20px', paddingRight: '8px' }}>
                记录数据周期最好为一周，坚持记录，计算越准确
              </div>
            }
            extra={
              <Link to="/body"><button className="extra-button">添加记录</button></Link>
            }
          />
          <FunctionCard
            img="http://op99wrlxr.bkt.clouddn.com/image/icons/plan_64.png"
            title="碳氢氧计划"
            content={
              <div>
                {/*<span style={{ marginRight: '3px', fontSize: '9px' }}>剩余</span>*/}
                {/*<span style={{ fontSize: '32px', verticalAlign: 'middle' }}>31</span>*/}
                {/*<span style={{ verticalAlign: 'super', fontSize: '9px' }}>次</span>*/}
                Coming soon
              </div>
            }
          />
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  currentUser: PropTypes.object,
};

export default HomePage;
