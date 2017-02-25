import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import Timer from './../../components/Timer';
import $ from "jquery";

describe('Timer', () => {
 it('should exist', () => {
  expect(Timer).toExist();
 });

 it('should start timer on satrted', (done) => {
   var timer = TestUtils.renderIntoDocument(<Timer/>);
   timer.handleStatusChange('started');
   expect(timer.state.count).toBe(0);

   setTimeout(() => {
    expect(timer.state.timerStatus).toBe('started');
    expect(timer.state.count).toBe(1);
    done();
   },1001);
 });

 it('should stop timer on stopped', (done) => {
   var timer = TestUtils.renderIntoDocument(<Timer/>);
   timer.handleStatusChange('stopped');
   expect(timer.state.count).toBe(0);

   setTimeout(() => {
    expect(timer.state.timerStatus).toBe('stopped');
    expect(timer.state.count).toBe(0);
    done();
   },1001);
 });

 
});
