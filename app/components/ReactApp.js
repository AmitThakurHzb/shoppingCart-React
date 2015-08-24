/** @jsx React.DOM */

var React = require('react/addons');
    Grid = require('./ProdGrid'),

    CartStore = require('../stores/CartStore');
    DefaultData =  require('../utils/setDataDefault.js');
    

var ReactApp = React.createClass({
      getInitialState: function() {
        return {}
      },
      componentWillMount: function () {
        DefaultData.setJsonDataFile();
        //DefaultData.setJsonDataAjax();
        this.setState({products: CartStore.getProdList()});
      },
      componentDidMount: function () {
      },

      render: function () {
        return (
          <div id="">
            <Grid items={this.state.products} />
          </div>
        )
      }
  });




/* Module.exports instead of normal dom mounting */
module.exports = ReactApp;