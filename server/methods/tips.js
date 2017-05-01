import { Meteor } from 'meteor/meteor';
// import { check } from 'meteor/check';
import Tips from '../../imports/api/documents/collections/tips';

export default function () {
  Meteor.methods({
    'tips.update'() {
      Tips.insert({
        title: '天气炎热',
        type: '知识点',
        content: '天气炎热要保证每天喝八杯水，也就是2L左右，只有这样才能保证基础代谢',
      });
    },
  });
}
