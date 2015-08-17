    /** @jsx React.DOM */

var React = require('react/addons'),
	ReactApp = require('./components/ReactApp'),
	NavPanel = require('./components/navPanel');

var mountNode = document.getElementById("react-main-mount");
var NavpanelMountNode = document.getElementById("navPanel");



React.render(new ReactApp({}), mountNode);
React.render(new NavPanel({}),NavpanelMountNode);
