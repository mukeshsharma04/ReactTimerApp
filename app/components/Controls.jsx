import React from 'react';

var Controls = React.createClass({
  propTypes : {
    countdownStatus : React.PropTypes.string.isRequired,
    onStatusChange : React.PropTypes.func.isRequired
  },

  onStatusChange : function(newStatus) {
   return () => {
    this.props.onStatusChange(newStatus);
   }
  },

 render : function() {
  var {countdownStatus} = this.props;
  var renderStartStopButton = () => {
   if(countdownStatus === 'started') {
    return <button onClick={this.onStatusChange('paused')} className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">
     PAUSE
    </button>
   }else if (countdownStatus === 'paused') {
    return <button onClick={this.onStatusChange('started')}  className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
     START
    </button>
   }
  };

  return (
   <div className="mdl-card__actions mdl-card--border controls">
    {renderStartStopButton()} &nbsp;&nbsp;
    <button onClick={this.onStatusChange('stopped')}  className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
     Clear
    </button>
   </div>
  );
 }
});

module.exports = Controls;
