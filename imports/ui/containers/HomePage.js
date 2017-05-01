import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import Loading from '../components/Loading';

import HomePage from '../pages/HomePage';

const composer = ({ params }, onData) => {
  const currentUser = Meteor.user();
  if (currentUser) {
    Meteor.call('user.update', currentUser.username);
    const profile = currentUser.profile;
    onData(null, { profile });
  }
};

export default composeWithTracker(composer, Loading)(HomePage);
