import { Meteor } from 'meteor/meteor';
import { Base64 } from 'meteor/base64';
import { EJSON } from 'meteor/ejson';
import { composeWithTracker } from 'react-komposer';
import { getCookie } from '../../modules/lib/cookies';
import App from '../layouts/App';

const composer = ({ params }, onData) => {

  const loggingIn = Meteor.loggingIn();
  const user = Meteor.user();

  if (!loggingIn && !user) {
    let sess = getCookie('session');
    console.log(sess);
    // TODO: 将所有页面重定向到【callback】，然后返回到该页面
    // const redirect = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${Meteor.settings.public.WechatAppId}`
    //   + `&redirect_uri=${encodeURIComponent(window.location.origin + window.location.pathname)}`
    //   + '&response_type=code&scope=snsapi_base&state=STATE&connect_redirect=1#wechat_redirect';
    const redirect = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${Meteor.settings.public.WechatAppId}`
      + '&redirect_uri=http://www.100th.top/callback&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect';
    if (!sess) {
      const err = new Meteor.Error('session-cookie-err');
      window.location.href = redirect;
      throw err;
    }

    sess = EJSON.parse(String.fromCharCode.apply(String, Base64.decode(sess)));
    if (!sess.openid) { // very unlikely
      const err = new Meteor.Error('session-cookie-openid-err');
      window.location.href = redirect;
      throw err;
    }
    const openid = sess.openid;

    console.log(openid);
    // Meteor.loginWithPassword({ username: openid }, 'cho666', (err) => {
    //   if (err) throw new Meteor.Error('login-err', err.toString());
    // });
  }


  // const redirect = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${Meteor.settings.public.WechatAppId}&redirect_uri=http://www.100th.top/callback&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect`
  // console.log(redirect);
  // window.location.href = redirect;
  // let sess = getCookie('session');
  // sess = EJSON.parse(String.fromCharCode.apply(String, Base64.decode(sess)));
  // const openid = sess.openid;
  // Meteor.loginWithPassword({ username: openid }, 'cho666', (err) => {
  //   console.log(err);
  // });
  // const loggingIn = Meteor.loggingIn();
  // const user = Meteor.user();
  console.log(loggingIn);
  console.log(user);
  onData(null, { });

  // if (subscription.ready()) {
  //   const doc = Documents.findOne(params._id);
  //   onData(null, { doc });
  // }
};

export default composeWithTracker(composer)(App);
