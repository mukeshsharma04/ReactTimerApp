import React from 'react';
import Clock from './Clock';
import TimerControl from './TimerControl';

var Timer = (props) => {
 return (
  <div>
     <Clock />
     <TimerControl />
  </div>
 );
}

module.exports = Timer;
