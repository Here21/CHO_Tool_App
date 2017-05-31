import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import Loading from '../components/Loading';

import Tips from '../../api/documents/collections/tips';

import HomePage from '../pages/HomePage';

const composer = ({ params }, onData) => {
  const currentUser = Meteor.user();
  const tips = Meteor.subscribe('tips.list');
  if (currentUser && tips.ready()) {
    const tip = Tips.find().fetch();
    Meteor.call('user.update', currentUser.username);
    // if (Meteor.settings.public.inWeChat) {
    // }
    onData(null, { currentUser, tip });
  }
};

export default composeWithTracker(composer, Loading)(HomePage);
