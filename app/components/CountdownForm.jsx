import React from 'react';

var CountdownForm = React.createClass({
 onSubmit : function(e) {
  e.preventDefault();
  var strSeconds = this.refs.seconds.value;

  if (strSeconds.match(/^[0-9]*$/)) {
   this.refs.seconds.vaue = '';
   this.props.onSetCountDown(parseInt(strSeconds,10));
  }
 },

 render : function() {
  return (
   <div className="mdl-grid">
   <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
   &nbsp;
   <div className="mdl-textfield mdl-js-textfield">
     <input ref="seconds" className="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?"
      placeholder="Enter in seconds" />
    </div> &nbsp;
   <button className="mdl-button mdl-js-button mdl-button--colored">START</button>
    </form>
   </div>
  );
 }
});

module.exports = CountdownForm;
