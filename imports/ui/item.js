import { Template } from 'meteor/templating';
import './item.html';
import './item.css';

import { GroceryItems } from '../api/groceryItems.js';

//classes used solely for selection purposes
Template.item.events({
	'click .checkoff'(event){
		//prevent default
		event.preventDefault();

		//remove item by mongo _id
		GroceryItems.remove(this._id);
	},

	'click .remove-item'(event){
		//prevent default
		event.preventDefault();

		//remove item by mongo _id
		GroceryItems.remove(this._id);
	},
	'click .make-private'(event){
		//make private true, update db and set eye to green
		GroceryItems.update(this._id, {
      		$set: { private: ! this.private },
    	})

		$(`#${this._id}`).toggleClass('active');
		
	},
	//change check off btn styles on mouseenter and leave
	'mouseenter .checkoff'(event){
		$(`#btn-${this._id}`).toggleClass('checked');
	},
	'mouseleave .checkoff'(event){
		$(`#btn-${this._id}`).toggleClass('checked');
	}
})