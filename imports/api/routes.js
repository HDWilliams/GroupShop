import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

//routing for home page. determines which dynamic teplate to render within the homepage

Accounts.onLogin(function() 
	{ 
		FlowRouter.redirect('/');
	});


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

Accounts.onLogout(function() { FlowRouter.redirect('/login'); });