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
            title="每日提醒"
            content={
              <div>
                我爱你兄弟
              </div>
            }
          />
          <FunctionCard
            img="http://op99wrlxr.bkt.clouddn.com/image/icons/form_64.png"
            title="身体数据"
            content={
              <div>
                功能尚未开放
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
                <span style={{ marginRight: '3px', fontSize: '9px' }}>剩余</span>
                <span style={{ fontSize: '32px', verticalAlign: 'middle' }}>31</span>
                <span style={{ verticalAlign: 'super', fontSize: '9px' }}>次</span>
              </div>
            }
            extra={
              <button className="extra-button">修改计划</button>
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
