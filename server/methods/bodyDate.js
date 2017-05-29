import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import BodyData from '../../imports/api/documents/collections/bodyData';

export default function () {
  Meteor.methods({
    'bodydata.first'(data) {
      check(data, Object);
      // console.log(data);
      const userid = Meteor.userId();
      if (userid) {
        BodyData.insert({
          userId: data.userId,
          gender: data.gender,
          age: data.age,
          stature: data.stature,
          datas: data.datas,
        });
      }
    },
    'bodydata.add'(values) {
      check(values, Object);
      console.log(values);
      const userid = Meteor.userId();
      if (userid) {
        BodyData.update({ userId: values.userId }, { $push: { datas: {
          weight: values.weight,
          type: values.type,
        } } });
      }
    },
  });
}
