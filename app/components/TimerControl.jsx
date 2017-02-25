import React from 'react';

var TimerControl = (props) => {
 return (
  <div className="mdl-card__actions mdl-card--border">
   <button className="mdl-button mdl-js-button mdl-button--colored">
    START
   </button>
   &nbsp;&nbsp;
   <button className="mdl-button mdl-js-button mdl-button--colored">
    CLEAR
   </button>
  </div>
 );
}

module.exports = TimerControl;
