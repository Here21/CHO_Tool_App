import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';


export default function () {
  Meteor.methods({
    'user.excited'(openid) {
      check(openid, String);
      const user = Meteor.users.findOne({ username: openid });
      return user;
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
