import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Plans from '../../imports/api/documents/collections/plans';

export default function () {
  Meteor.methods({
    'plans.change'(username) {
      check(username, String);
      const userid = Meteor.userId();
      if (userid) {
        Plans.insert({
          username,
          state: '正常',
          type: '月餐',
          days: 31,
        });
      }
    },
  });
}
