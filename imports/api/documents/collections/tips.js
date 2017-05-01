import { Mongo } from 'meteor/mongo';
// import SimpleSchema from 'simpl-schema';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const Tips = new Mongo.Collection('tips');
export default Tips;

Tips.schema = new SimpleSchema({
  title: {
    type: String,
  },
  type: {
    type: String,
    allowedValues: ['知识点', '注意'],
  },
  content: {
    type: String,
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

Tips.attachSchema(Tips.schema);
