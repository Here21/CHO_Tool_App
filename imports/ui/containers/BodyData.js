import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import Loading from '../components/Loading';

// import Tips from '../../api/documents/collections/tips';

import BodyData from '../pages/BodyData';

const composer = ({ params }, onData) => {
  // const currentUser = Meteor.user();
  // const tips = Meteor.subscribe('tips.list');
  // if (currentUser && !tips.ready()) {
  //   const tip = Tips.find().fetch();
  //   Meteor.call('user.update', currentUser.username);
  //   onData(null, { currentUser, tip });
  // }
  onData(null, {});
};

export default composeWithTracker(composer, Loading)(BodyData);
