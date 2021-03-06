/** @jsx React.DOM */

//Reflux.nextTick(process.nextTick);

var React = require("react/addons");
var CSSTransitionGroup = require('react/lib/ReactTransitionGroup');


// Basic styling
require("./bower_components/normalize.css/normalize.css");
require("./styles/main.scss");

// React Router
var Router = require('react-router');
var Routes = Router.Routes;
var Route = Router.Route;
var Link = Router.Link;
var ActiveState = Router.ActiveState;

// Toggle Protected vs. Full access
var showProtected = true;

// Pages
var Intro = require('./Intro.jsx');
var About = require('./About.jsx');
var Work = ( showProtected ) ? require('./WorkProtected.jsx') : require('./Work.jsx');
var Contact = require('./Contact.jsx');
var Project = require('./Project.jsx');

// Components
var Header = require('./_components/Header.jsx');

// Reflux
var Reflux = require('reflux');
var Store = require('./_reflux/Store.js');


var Main = React.createClass({

	mixins: [
		ActiveState,
		Reflux.listenTo(Store,"onViewMounted"),
	],

	getInitialState: function () {
    	return {
			isIntroActive: false,
			isRouteActive: false,
			showBackButton: false,
			showCloseButton: false,
		};
	},

	updateActiveState: function () {
		this.setState({
			isIntroActive: this.isActive('intro'),
			isRouteActive: this.isActive('work') || this.isActive('about') || this.isActive('contact') || this.isActive('project'),
			showBackButton: this.isActive('project')
		});
	},

	onViewMounted: function(){
			// reset scrollposition for new view entering
		    this.refs.viewport.getDOMNode().scrollTop = 0;

	},

	// onCloseButtonShow: function(){
	// 	this.setState({
	// 		showCloseButton: true,
	// 		showBackButton: false
	// 	});
	// },

	// onCloseButtonHide: function(){
	// 	this.setState({
	// 		showCloseButton: false,
	// 		showBackButton: true
	// 	})
	// },

	render: function() {

		return (
			<div className="app">
				<Header isIntroActive={this.state.isIntroActive} isRouteActive={this.state.isRouteActive} showBackButton={this.state.showBackButton} showCloseButton={this.state.showCloseButton} />
				<div className="viewport" ref="viewport">
					<CSSTransitionGroup transitionName="view" component={React.DOM.div}>
			          <this.props.activeRouteHandler />
			        </CSSTransitionGroup>
				</div>
			</div>
		);
	}

});

var workClasses = 'work';
workClasses += ( showProtected ) ? ' protected' : '';

module.exports = (
	<Routes location="history">
		<Route handler={Main}>
			<Route name="intro" path="/" handler={Intro} addHandlerKey={true} classId="intro" />
			<Route name="about" path="about" handler={About} addHandlerKey={true} classId="about" />
			<Route name="work" path="work" handler={Work} addHandlerKey={true} classId={workClasses} />
			<Route name="project" path="/work/:projectSlug" handler={Project} classId="project" addHandlerKey={true} />
			<Route name="contact" path="contact" handler={Contact} addHandlerKey={true} classId="contact" />
		</Route>
	</Routes>
);
