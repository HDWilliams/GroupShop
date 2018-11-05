import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

//routing for home page. determines which dynamic teplate to render within the homepage

//Accounts.onLogin(function() { FlowRouter.redirect('/'); }); 


Accounts.onLogout(function() { FlowRouter.redirect('/login'); });

FlowRouter.route('/', {
	name: 'homepage',
	action() {
		if (!Meteor.userId()){
			FlowRouter.go('loginpage');
		};
		BlazeLayout.render('homepage', {template:'myshopping'});
	}
});

FlowRouter.route('/login', {
	name: 'loginpage',
	action() {
		if (Meteor.userId()){
			FlowRouter.go('homepage');
		};
		BlazeLayout.render('loginpage');
	}
});

//test route, should be changed to change view using tabs
FlowRouter.route('/groups', {
	name: 'Grouppage',
	action() {
		BlazeLayout.render('homepage', {template: 'groupshopping'});
	}
});
