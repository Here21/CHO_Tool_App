import { Meteor } from 'meteor/meteor';
import { Base64 } from 'meteor/base64';
import { Accounts } from 'meteor/accounts-base';
import { EJSON } from 'meteor/ejson';
import { composeWithTracker } from 'react-komposer';
import { getCookie } from '../../modules/lib/cookies'
// import Documents from '../../api/documents/documents.js';
import HomePage from '../pages/HomePage';
import Loading from '../components/Loading.js';

const composer = ({ params }, onData) => {
  // const redirect = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${Meteor.settings.public.WechatAppId}&redirect_uri=http://www.100th.top/callback&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect`
  // console.log(redirect);
  // window.location.href = redirect;
  let sess = getCookie('session');
  sess = EJSON.parse(String.fromCharCode.apply(String, Base64.decode(sess)));
  // console.log(Base64.decode(sess));
  const openid = sess.openid;
  Accounts.callLoginMethod({
    methodArguments: [{ username: openid }],
    userCallback: (err) => {
      if (err) throw new Meteor.Error('login-err', err.toString());
    },
  });

  const loggingIn = Meteor.loggingIn();
  const user = Meteor.user();

  console.log(loggingIn);
  console.log(user);
  onData(null, { });

  // if (subscription.ready()) {
  //   const doc = Documents.findOne(params._id);
  //   onData(null, { doc });
  // }
};

export default composeWithTracker(composer)(HomePage);
