import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import './addItem.html';

import { GroceryItems } from '../api/groceryItems.js';
import { UserData } from '../api/userData.js';

//insert into grocery items collection
Template.addItem.events({
	'submit form'(event) {
		
		//prevent default action
		event.preventDefault();

		//get target value
		const item = event.target[0].value;

		//insert into collection
		GroceryItems.insert({
			itemName: item,
			createdAt: new Date(),
			private: false,
			userId: Meteor.userId(),
			
		});

		UserData.insert({
			userId: Meteor.userId(),
			Groups: ['hi']
		});

		//clear
		event.target[0].value = '';
	}
})