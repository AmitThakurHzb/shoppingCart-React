/** @jsx React.DOM */

var React = require('react/addons');
var $ = require('jquery');

var Grid = require('./ProdGrid');


var jsonData = require('../data/jsonData.js').jsonData;



var ReactApp = React.createClass({
      getDefaultProps:function(){


      },
      componentWillMount: function () {
      /* var data1 = $.getJSON( "ajax/", function( data ) {
        var items = [];
        $.each( data, function( key, val ) {
          items.push( "<li id='" + key + "'>" + val + "</li>" );
        });
        console.log(data);
      });*/
    
     // alert(data1);


      },
      componentDidMount: function () {
      

      },

      render: function () {
        return (
          <div id="">
            <Grid items={jsonData} />
          </div>
        )
      }
  });


/* Module.exports instead of normal dom mounting */
module.exports = ReactApp;