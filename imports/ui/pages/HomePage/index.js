import React, { Component } from 'react';
import { browserHistory } from 'react-router';
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
          占位方框
        </div>
      </div>
    );
  }
}

export default HomePage;
