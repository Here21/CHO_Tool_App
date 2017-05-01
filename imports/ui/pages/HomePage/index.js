import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FunctionCard from '../../components/FunctionCard';
import './style.scss';

class HomePage extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    const profile = this.props.profile;
    return (
      <div className="home-page">
        <div className="home-page-userinfo">
          <img src={profile.headimgurl} alt="avatar"/>
          <p>{profile.nickname}</p>
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
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  profile: PropTypes.object,
};

export default HomePage;
