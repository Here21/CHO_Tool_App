import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export default function () {
  Meteor.users.deny({ update: () => true });
  Meteor.publish('userData', () => {
    return Meteor.users.find();
  });
}
