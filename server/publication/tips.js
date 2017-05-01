import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import Tips from '../../imports/api/documents/collections/tips';

export default function () {
  Meteor.publish('tips.list', () => {
    return Tips.find();
  });
}
