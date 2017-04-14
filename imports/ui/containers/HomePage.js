import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';

// import Documents from '../../api/documents/documents.js';
import HomePage from '../pages/HomePage';
import Loading from '../components/Loading.js';

const composer = ({ params }, onData) => {
  // const redirect = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${Meteor.settings.public.wechatAppId}`
  //   + `&redirect_uri=${encodeURIComponent(window.location.origin + window.location.pathname)}`
  //   + '&response_type=code&scope=snsapi_userinfo&state=STATE&connect_redirect=1#wechat_redirect';
  // console.log(encodeURIComponent(window.location.origin + window.location.pathname));
  // // const url = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${Meteor.settings.public.wechatAppId}`
  // //   + `&redirect_uri=${encodeURIComponent(window.location.origin + window.location.pathname)}`
  // //   + '&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect';
  // const redirect = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${Meteor.settings.public.wechatAppId}&redirect_uri=${encodeURIComponent(window.location.origin + window.location.pathname)}&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect`
  // console.log(redirect);
  // window.location.href = redirect;
  onData(null, { });

  // if (subscription.ready()) {
  //   const doc = Documents.findOne(params._id);
  //   onData(null, { doc });
  // }
};

export default composeWithTracker(composer)(HomePage);
