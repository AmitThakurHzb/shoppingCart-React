


var React = require('react/addons'),
ReactApp = React.createFactory(require('../components/ReactApp')),
MiniBagPanel = React.createFactory(require('../components/MiniBag')),
NavPanel = React.createFactory(require('../components/NavPanel')),
jsonData = require('../data/jsonData.js').jsonData,
DefaultData =  require('../utils/setDataDefault.js');

module.exports = function(app) {

	app.get('/', function(req, res){

		// Set defalut data to store. 
		//DefaultData.setJsonDataFile();

		var reactHtml = React.renderToString(ReactApp({}));
			navPanelHtml = React.renderToString(NavPanel({})),
			miniBagPanelHtml = React.renderToString(MiniBagPanel({}));
	    
	    res.render('index.ejs', {reactOutput: reactHtml,navPanel: navPanelHtml, minibagPanel : miniBagPanelHtml});
	    
	});
	app.get('/json', function(req, res){
	    res.json(jsonData);
	    
	});

};