import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import Loading from '../components/Loading';

import BodyData from '../../api/documents/collections/bodyData';

import BodyDataPage from '../pages/BodyData';

const composer = ({ params }, onData) => {
  const currentUser = Meteor.user();
  const bodyData = Meteor.subscribe('bodyData.isExisted', currentUser._id);
  if (currentUser && !bodyData.ready()) {
    const bodyDatas = BodyData.find().fetch();
    onData(null, { currentUser, bodyDatas });
  }
  onData(null, {});
};

export default composeWithTracker(composer, Loading)(BodyDataPage);
