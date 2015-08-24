

var FluxCartActions = require('../actions/FluxCartActions'),
	Request = require('superagent'),
	jsonData = require('../data/jsonData.js').jsonData;

module.exports = {
  setJsonDataAjax: function() {
      Request
         .get('/json')
         .send({})
         .end(function(err, res){
           if (res.ok) {
            FluxCartActions.receiveProduct(res.body);
            //console.log(JSON.stringfy(res.body));

           } else {
            	FluxCartActions.receiveProduct(jsonData);
           }
         });

  },
  setJsonDataFile: function() {	
  	FluxCartActions.receiveProduct(jsonData);
  }
};