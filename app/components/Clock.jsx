import React from 'react';

var Clock = React.createClass({

 getDefaultProps : function() {
  totalSeconds : 0
 },

 propTypes : {
  totalSeconds : React.PropTypes.number
 },

 formatSeconds : function(totalSeconds) {
  var sec = totalSeconds % 60;
  var minutes = Math.floor(totalSeconds / 60);
  console.log(sec);
  if(sec < 10) {
   sec = '0'+sec;
  }

  if(minutes < 10) {
   minutes = '0'+minutes;
  }

  return minutes + ':' + sec;
 },

 render : function () {
  var {totalSeconds} = this.props;
  return (
   <div className="mdl-card__supporting-text clock">
    <span className="clock-text">{this.formatSeconds(totalSeconds)}</span>
   </div>
  );
 }
});

module.exports = Clock;
