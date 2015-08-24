    /** @jsx React.DOM */

var React = require('react/addons'),
	ReactApp = require('./components/ReactApp'),
	MiniBag = require('./components/MiniBag'),
	NavPanel = require('./components/NavPanel'),

	// set Default data for store
	//data =  require('./utils/setDataDefault.js');
  	//data.setJsonDataAjax();

	mountNode = document.getElementById("react-main-mount"),
	NavpanelMountNode = document.getElementById("navPanel"),
	miniBagMountNode = document.getElementById("bagPanel");



React.render(new ReactApp({item: "abc"}), mountNode);
React.render(new NavPanel({}),NavpanelMountNode);
React.render(new MiniBag({}),miniBagMountNode);
