import React from 'react';
import Clock from './Clock';
import Controls from './Controls';

var Timer = React.createClass({

 getInitialState : function () {
  return {
   count : 0,
   timerStatus : 'stopped'
  };
 },

 handleStart : function () {
  this.timer = setInterval(() => {
   this.setState({
    count : this.state.count + 1
   });
  },1000);
 },

 componentWillUnmount : function() {
  clearInterval(this.timer);
 },

 componentDidUpdate : function(prevProps, prevState) {
  if(this.state.timerStatus !== prevState.timerStatus) {
   switch (this.state.timerStatus) {
    case 'started' :
     this.handleStart();
     break;
    case 'stopped' :
     this.setState({count : 0});
    case 'paused' :
      clearInterval(this.timer);
      this.timer = undefined;
      break;
     }
    }
   },

 handleStatusChange : function (newTimerStatus) {
  this.setState({timerStatus : newTimerStatus});
 },

 render : function() {
  var {count,timerStatus} = this.state;

  return (
   <div>
     <h1 className="page-title">Timer</h1>
     <Clock totalSeconds={count}/>
     <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
    </div>
  );
 }
});

module.exports = Timer;
