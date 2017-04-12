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
  nickName: {
    type: String,
    optional: true,
  },
  gender: {
    type: String,
    allowedValues: ['Male', 'Female'],
    optional: true,
  },
  organization: {
    type: String,
    optional: true,
  },
});

Schema.User = new SimpleSchema({
  username: {
    type: String,
    // For accounts-password, either emails or username is required, but not both. It is OK to make this
    // optional here because the accounts-password package does its own validation.
    // Third-party login packages may not require either. Adjust this schema as necessary for your usage.
    optional: true,
  },
  emails: {
    type: Array,
    // For accounts-password, either emails or username is required, but not both. It is OK to make this
    // optional here because the accounts-password package does its own validation.
    // Third-party login packages may not require either. Adjust this schema as necessary for your usage.
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
  // Add `roles` to your schema if you use the meteor-roles package.
  // Option 1: Object type
  // If you specify that type as Object, you must also specify the
  // `Roles.GLOBAL_GROUP` group whenever you add a user to a role.
  // Example:
  // Roles.addUsersToRoles(userId, ["admin"], Roles.GLOBAL_GROUP)
  // You can't mix and match adding with and without a group since
  // you will fail validation in some cases.
  roles: {
    type: Object,
    optional: true,
    blackbox: true,
  },
});

Meteor.users.attachSchema(Schema.User);


// openid: 'o3gdewZvZBOL4cNHrhlYyZpht6r0',
// nickname: 'A.日尝轻食健身餐',
// sex: 2,
// language: 'zh_CN',
// city: 'Dalian',
// province: 'Liaoning',
// country: 'China',
// headimgurl: 'http://wx.qlogo.cn/mmopen/w6hSCnLZByFJa0au7ic0PhTicL5jaUOhgLbBGticCeZazwvO4hPd2Z049EUWhshS1uaTowH4P82ibBAMuF4RynJQXQvxNWGsrqOg/0',
// subscribe_time: 1491989674,
// remark: '',
// groupid: 0,
// tagid_list: []
