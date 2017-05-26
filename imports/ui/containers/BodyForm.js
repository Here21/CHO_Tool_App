import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import Loading from '../components/Loading';
import BodyForm from '../pages/BodyForm';

import BodyData from '../../api/documents/collections/bodyData';


const composer = ({ params }, onData) => {
  const userId = Meteor.userId();
  const bodyData = Meteor.subscribe('bodyData.isExisted', userId);
  if (bodyData.ready()) {
    const existed = BodyData.findOne({ userId });
    onData(null, { existed, userId });
  }
  // onData(null, {});
};

export default composeWithTracker(composer, Loading)(BodyForm);
