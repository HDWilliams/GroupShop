import { Template } from 'meteor/templating';
import './itemList.html';

import { GroceryItems } from '../api/groceryItems.js';

Template.itemList.helpers({
	groceryItems() {
		return GroceryItems.find({});
	},
})