import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const UserData = new Mongo.Collection('userData');
//define schema to store user info to make users searchable for forming groups
UserDataSchema = new SimpleSchema({
	userId: {
		type: String,
		autoValue: function(){
			return this.userId;
		}
	},
	Groups: [String],

})

UserData.attachSchema(UserDataSchema);
