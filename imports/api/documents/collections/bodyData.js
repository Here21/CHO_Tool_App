import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const BodyData = new Mongo.Collection('bodydata');
export default BodyData;

const Datas = new SimpleSchema({
  type: {
    type: Number,
    optional: true,
    decimal: true,
  },
  weight: {
    type: Number,
    optional: true,
    decimal: true,
  },
  createdAt: {
    type: Date,
    autoValue: function() {
      if (this.isUpdate) {
        return new Date();
      }
    },
  },
});

BodyData.schema = new SimpleSchema({
  userId: {
    type: String,
  },
  gender: {
    type: Number,
    optional: true,
  },
  age: {
    type: Number,
    optional: true,
  },
  stature: {
    type: Number,
    optional: true,
    decimal: true,
  },
  datas: {
    type: [Datas],
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

BodyData.attachSchema(BodyData.schema);
