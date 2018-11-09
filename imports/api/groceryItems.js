import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const GroceryItems = new Mongo.Collection('groceryItems');
//define schema to store all grocery items to make them easily searchable
GroceryItemSchema = new SimpleSchema({
	itemName: String,
	createdAt: Date,
	private: {
		type: Boolean,
	},
	userId: {
		type: String,
	}
});



GroceryItems.attachSchema(GroceryItemSchema);
