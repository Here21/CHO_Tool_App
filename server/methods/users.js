import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
// import { getUser } from './api';
import WechatAPI from 'wechat-api';

const api = new WechatAPI(Meteor.settings.public.WechatAppId, Meteor.settings.public.WechatAppSecret);


export default function () {
  Meteor.methods({
    'user.excited'(openid) {
      check(openid, String);
      return Meteor.users.findOne({ username: openid });
    },
    'user.update'(userInfo) {
      check(userInfo, Object);
      Meteor.users.update({ username: userInfo.openid },
        { $set: {
          username: userInfo.openid,
          'profile.nickname': userInfo.nickname,
          'profile.gender': userInfo.sex,
          'profile.headimgurl': userInfo.headimgurl,
        } }, { upsert: true });
    },
  });
}
