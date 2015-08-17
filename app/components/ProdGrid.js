/** @jsx React.DOM */

var React = require('react/addons');
    $ = require('jquery'),
    MiniBagPanel = React.createFactory(require('./MiniBag'));


var Item = React.createClass({
  update:function(prop){
    var curPrice = $('.cart-count__price');
        curCount = $('.cart-count__value'),
        cartSubtotal = $('#minicartSubtotal'),

        newCount = (curCount)?(parseInt(curCount.text())+1):0,

        newPrice = (curPrice.text() && prop.fromPrice )?(parseInt(prop.fromPrice)+ parseInt(curPrice.text())):curPrice.text();
    
    curPrice.text(newPrice);
    curCount.text(newCount);
    cartSubtotal.html(newPrice);
    
  },
  render: function(){
  return <li className="prodList col-md-4">
        <img src={this.props.itemName.prodImgSrc} />
        <p className="prodName">{this.props.itemName.prodName}</p>
        <p className="prodName">{"Price : "}{this.props.itemName.fromPrice}</p>
        <button type="button" className="btn btn-default btn-sm" onClick={this.update.bind(this,this.props.itemName)} >
          {"Add "}<i className="glyphicon glyphicon-plus" aria-hidden="true" />
        </button>
  </li>
  }

});

  var ProdGrid = React.createClass({
    render: function(){
      var items = this.props.items.map(function(item){
        return <Item itemName={item} />;
      });

      return (<ul>{items}</ul>);
    }
  });


/* Module.exports instead of normal dom mounting */
module.exports = ProdGrid;