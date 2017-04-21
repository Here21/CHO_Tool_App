import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';

import HomePage from '../pages/HomePage';

const composer = ({ params }, onData) => {
  const user = Meteor.user();
  onData(null, { user });
};

export default composeWithTracker(composer)(HomePage);
