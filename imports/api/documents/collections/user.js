import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';

const Schema = {};

Schema.UserState = new SimpleSchema({
  type: {
    type: String,
    optional: true,
  },
  state: {
    type: String,
    optional: true,
  },
});

Schema.UserProfile = new SimpleSchema({
  nickname: {
    type: String,
    optional: true,
  },
  gender: {
    type: Number,
    optional: true,
  },
  headimgurl: {
    type: String,
    optional: true,
  },
  state: {
    type: Schema.UserState,
    optional: true,
  },
});

Schema.User = new SimpleSchema({
  username: {
    type: String,
    optional: true,
  },
  emails: {
    type: Array,
    optional: true,
  },
  'emails.$': {
    type: Object,
  },
  'emails.$.address': {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
  },
  'emails.$.verified': {
    type: Boolean,
  },
  createdAt: {
    type: Date,
  },
  profile: {
    type: Schema.UserProfile,
    optional: true,
  },
  roles: {
    type: Object,
    optional: true,
    blackbox: true,
  },
});

Meteor.users.attachSchema(Schema.User);

