import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

//routing for home page. determines which dynamic teplate to render within the homepage
FlowRouter.route('/', {
	name: 'homepage',
	action() {
		BlazeLayout.render('homepage', {template:'myshopping'});
	}
});