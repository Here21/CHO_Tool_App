import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const Plans = new Mongo.Collection('plans');
export default Plans;

Plans.schema = new SimpleSchema({
  username: {
    type: String,
  },
  state: {
    type: String,
    allowedValues: ['正常', '临近', '停餐', '到期'],
    optional: true,
  },
  type: {
    type: String,
    optional: true,
  },
  days: {
    type: Number,
    optional: true,
  },
  createdAt: {
    type: Date,
    autoValue: function() {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return { $setOnInsert: new Date() };
      } else {
        this.unset();  // Prevent user from supplying their own value
      }
    },
  },
  updatedAt: {
    type: Date,
    autoValue: function() {
      if (this.isUpdate) {
        return new Date();
      }
    },
    denyInsert: true,
    optional: true,
  },
});

Plans.attachSchema(Plans.schema);
