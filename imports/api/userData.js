import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';


//extends the Meteor.users collection schema
Schema = {};
Schema.UserProfile = new SimpleSchema({
    firstName: {
        type: String,
        regEx: /^[a-zA-Z-]{2,25}$/,
        optional: true
    },
    groups: {
        type: Array,
        regEx: /^[a-zA-Z]{2,25}$/,
        optional: true
    },
    'groups.$': String,
});

Schema.User = new SimpleSchema({
    _id: {
        type: String,
        regEx: SimpleSchema.RegEx.Id
    },
    username: {
        type: String,
        regEx: /^[a-z0-9A-Z_]{3,15}$/,
        custom: function () {
            console.log(this);
        }
    },
    emails: {
        optional: true,
        type: Array,
        custom: function () {
            console.log(this);
        }
    },
    "emails.$": Object,
    "emails.$.address": {
        optional: true,
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    "emails.$.verified": {
        optional: true,
        type: Boolean
    },
    createdAt: {
        type: Date
    },
    profile: {
        type: Schema.UserProfile,
        optional: true
    },
    services: {
        type: Object,
        optional: true,
        blackbox: true
    },
});

Meteor.users.attachSchema(Schema.User);