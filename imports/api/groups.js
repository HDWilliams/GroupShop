import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const Groups = new Mongo.Collection('groups');
//define schema for storing Group information
GroupsSchema = new SimpleSchema({
	Owner: String,
	GroupName: String,
	//array of userId's 
	Members: [String],
});


Groups.attachSchema(GroupsSchema);
