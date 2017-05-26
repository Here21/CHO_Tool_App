import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import Loading from '../components/Loading';

import BodyData from '../../api/documents/collections/bodyData';

import BodyDataPage from '../pages/BodyData';

const composer = ({ params }, onData) => {
  const bodyData = Meteor.subscribe('bodyData.isExisted', Meteor.userId());
  if (bodyData.ready()) {
    const bodyDatas = BodyData.find().fetch();
    onData(null, { bodyDatas });
  }
  onData(null, {});
};

export default composeWithTracker(composer, Loading)(BodyDataPage);
