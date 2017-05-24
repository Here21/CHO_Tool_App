import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import BodyData from '../../imports/api/documents/collections/bodyData';

export default function () {
  Meteor.publish('bodyData.isExisted', (userId) => {
    check(userId, String);
    console.log(userId);
    return BodyData.findOne({ userId });
  });
}
