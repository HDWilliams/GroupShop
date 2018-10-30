import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import './itemList.html';

import { GroceryItems } from '../api/groceryItems.js';

Template.itemList.helpers({
	groceryItems() {
		return GroceryItems.find({userId: Meteor.userId()});
	},
})