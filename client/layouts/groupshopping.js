import './groupshopping.html';

import { Template } from 'meteor/templating';

Template.groupshopping.events({
	'click #openModal'(event){
		var modal = $('ons-modal');
  		modal.show();
	},
	'click #closeModal'(event){
		var modal = $('ons-modal');
  		modal.hide();
	},
});
