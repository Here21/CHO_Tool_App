import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import BodyData from '../../imports/api/documents/collections/bodyData';

export default function () {
  Meteor.methods({
    'bodydata.first'(data) {
      check(data, Object);
      console.log(data);
      const userid = Meteor.userId();
      if (userid) {
        BodyData.insert({
          username: data.username,
          gender: data.gender,
          datas: data.datas,
        });
      }
    },
    'bodydata.add'(data) {
      check(data, Object);
      console.log(data);
      const userid = Meteor.userId();
      if (userid) {
        BodyData.update({ username: 'tesetestesset' }, { $push: { datas: data } });
      }
    },
  });
}
