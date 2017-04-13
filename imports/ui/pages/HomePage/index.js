import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import './style.scss';

class HomePage extends Component {
  componentDidMount() {
    const redirect = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${Meteor.settings.public.WechatAppId}`
      + `&redirect_uri=${encodeURIComponent(window.location.origin + window.location.pathname)}`
      + '&response_type=code&scope=snsapi_base&state=STATE&connect_redirect=1#wechat_redirect';
    console.log(redirect);
    // browserHistory.replace(redirect);
    window.location.href = redirect;
  }

  render() {
    return (
      <div className="home-page">
        <div className="home-page-userinfo">
          <img src="apple-touch-icon-precomposed.png" alt="avatar"/>
          <p>Martin</p>
        </div>
        <div>
          占位方框
        </div>
      </div>
    );
  }
};

export default HomePage;
