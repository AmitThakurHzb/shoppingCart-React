


var React = require('react/addons'),
ReactApp = React.createFactory(require('../components/ReactApp')),
MiniBagPanel = React.createFactory(require('../components/MiniBag')),
NavPanel = React.createFactory(require('../components/NavPanel'));

module.exports = function(app) {

	app.get('/', function(req, res){

		var reactHtml = React.renderToString(ReactApp({}));
			navPanelHtml = React.renderToString(NavPanel({})),
			miniBagPanelHtml = React.renderToString(MiniBagPanel({}));
	    
	    res.render('index.ejs', {reactOutput: reactHtml,navPanel: navPanelHtml, minibagPanel : miniBagPanelHtml});
	    
	});

};