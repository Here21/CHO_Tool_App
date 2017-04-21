import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export default function () {
  Meteor.users.deny({ update: () => true });
  Meteor.publish('userData', function () {
    console.log('publish');
    console.log(this.userId);
    return Meteor.users.find();
    // if (this.userId) {
    // } else {
    //   this.ready();
    // }
  });

  Meteor.publish('findUser', function (openid) {
    check(openid, String);
    return Meteor.users.findOne({ username: openid });
  });
}
