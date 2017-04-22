import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Base64 } from 'meteor/base64';
import { EJSON } from 'meteor/ejson';
import { composeWithTracker } from 'react-komposer';
import Loading from '../components/Loading.js';
import { getCookie } from '../../modules/lib/cookies';
import App from '../layouts/App';

const composer = ({ params }, onData) => {
  const loggingIn = Meteor.loggingIn();
  const user = Meteor.user();

  if (!loggingIn && !user) {
    let openid = '';
    if (!Meteor.settings.public.inWeChat) { // developer local debug mode
      openid = 'o3gdewT5m6HzRGZrGr726Y3M20AE';
    } else {
      let sess = getCookie('session');
      // TODO: 将所有页面重定向到【callback】，然后返回到该页面
      // ${encodeURIComponent(window.location.origin + window.location.pathname)}`
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
      openid = sess.openid;
    }

    const subscription = Meteor.subscribe('userData');
    if (subscription.ready()) {
      const excited = Meteor.users.findOne({ username: openid });
      if (!excited && !user) {
        Accounts.createUser({
          username: openid,
          password: Meteor.settings.public.InitialPassword,
        }, (err) => { if (err) throw new Meteor.Error('create-user-err', err.toString()); });
      }
      Meteor.loginWithPassword({ username: openid }, 'cho666', (err) => {
        if (err) throw new Meteor.Error('login-err', err.toString());
      });
    }
  }
  onData(null, { });
};

export default composeWithTracker(composer, Loading)(App);
