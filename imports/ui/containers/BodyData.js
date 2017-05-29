import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import Loading from '../components/Loading';
import BodyData from '../../api/documents/collections/bodyData';
import BodyDataPage from '../pages/BodyData';
import { BMR } from '/imports/constants/formula';

const composer = ({ params }, onData) => {
  const bodyData = Meteor.subscribe('bodyData.isExisted', Meteor.userId());
  if (bodyData.ready()) {
    const myData = BodyData.findOne({ userId: Meteor.userId() });
    if (myData) {
      const stature = myData.stature;
      const age = myData.age;
      const gender = myData.gender;
      // {...[{},{},{}]}
      const datas = myData.datas.map((value) => {
        return {
          date: value.createdAt,
          weight: value.weight,
          type: value.type,
          bmr: parseFloat(BMR(value.weight, stature, age, gender).toFixed(2)),
        };
      });
      onData(null, { myData: datas });
      return;
    }
    onData(null, { myData: [] });
  }
};

export default composeWithTracker(composer, Loading)(BodyDataPage);
