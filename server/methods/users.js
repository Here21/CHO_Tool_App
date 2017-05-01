import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import WechatAPI from 'wechat-api';

const api = new WechatAPI(Meteor.settings.public.WechatAppId, Meteor.settings.public.WechatAppSecret);


export default function () {
  Meteor.methods({
    'user.excited'(openid) {
      check(openid, String);
      return Meteor.users.findOne({ username: openid });
    },
    'user.update'(openid) {
      check(openid, String);
      api.getUser(openid, Meteor.bindEnvironment((err, result) => {
        if (err) throw new Meteor.Error('user-update-err', err.toString());
        Meteor.users.update({ username: result.openid },
          { $set: {
            username: result.openid,
            'profile.nickname': result.nickname,
            'profile.gender': result.sex,
            'profile.headimgurl': result.headimgurl,
            'profile.state': { type: '月餐', state: '正常' },
          } }, { upsert: true });
      }));
    },
  });
}
