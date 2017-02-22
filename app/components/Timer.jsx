import React from 'react';
import Clock from './Clock';
import TimerControl from './TimerControl';

var Timer = (props) => {
 return (
  <div className="mdl-grid">
   <div className="mdl-cell--3-offset mdl-cell mdl-cell--6-col">
    <div className="demo-card-wide mdl-card mdl-shadow--2dp mdi-card-full" >
     <Clock />
     <TimerControl />
    </div>
   </div>
  </div>
 );
}

module.exports = Timer;
