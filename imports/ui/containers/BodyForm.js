import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import Loading from '../components/Loading';
import BodyForm from '../pages/BodyForm';

import BodyData from '../../api/documents/collections/bodyData';


const composer = ({ params }, onData) => {
  const currentUser = Meteor.user();
  const bodyData = Meteor.subscribe('bodyData.isExisted', currentUser._id);
  if (currentUser && !bodyData.ready()) {
    const existed = BodyData.findOne({ userId: currentUser._id });
    onData(null, { currentUser, existed });
  }
  // onData(null, {});
};

export default composeWithTracker(composer, Loading)(BodyForm);
