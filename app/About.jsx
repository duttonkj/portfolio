/** @jsx React.DOM */

var React = require("react");

var View = require("./_components/View.jsx");

var AnimationHelper = require("./_components/AnimationHelper.js");

var ImageLoader = require('./_components/Image.jsx');

var ImageSrc = require('./images/kevin-dutton.jpg');


var About = React.createClass({

	mixins: [AnimationHelper],

	render: function() {

		return (
		<View classRoute={this.props.classId}  willEnter={this.state.willEnter} didEnter={this.state.didEnter}>
			<h1>About</h1>

			<div className="bio">
				<ImageLoader src={ImageSrc} aspectRatio={2.0} />
				<p>I am a full stack developer with 14 years professional experience who has built solutions for Fortune 50 companies, health care professionals, patients, and consumers.  I began programming for the web and have recently focused on responsive design and developing for the iOS platform. I appreciate great design and enjoy tackling complex interfaces and problems.</p>
			</div>
			<section>

                <h2><strong>Languages</strong> I know:</h2>
                <p>HTML(5), CSS(3), JavaScript, PHP, Objective-C</p>

                <h2><strong>Frameworks</strong> I utilize:</h2>
                <p>ReactJS, Ember, Angular, Backbone, JQuery, Laravel</p>

                <h2><strong>Tools</strong> I use: </h2>
                <p>GIT, SVN, SASS, Compass, NodeJS, Grunt, Gulp, Webpack, Chrome Dev Tools</p>

            </section>

            <section>

                <h2><strong>Companies</strong> I've worked for:</h2>
                <p><a href="http://www.inventivhealth.com" target="_blank">inVentiv Health</a>, <a href="http://www.gsw-w.com" target="_blank">GSW</a>, <a href="http://614mediagroup.com/" target="_blank">614 MediaGroup</a>, <a href="http://www.vsiweb.com/" target="_blank">Vertex Software</a></p>

                <h2><strong>Projects</strong> I'm involved in:</h2>
                <p><a href="http://turnstyle.social" target="_blank">TurnStyle</a>, <a href="http://trafficalarm.co" target="_blank">Traffic Alarm</a></p>

            </section>

            <section className="footnotes">

                <h2>Footnotes</h2>
				<p>Built with ReactJS, SASS, and Webpack<br/>
                View the <a href="https://github.com/duttonkj/portfolio" target="_blank">source</a> for this site on GitHub</p>

            </section>
		</View>
		);
	}
});

module.exports = About;
