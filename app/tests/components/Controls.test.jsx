import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import Controls from './../../components/Controls';
import $ from "jquery";


describe('Controls', () => {
 it('should exist', () => {
  expect(Controls).toExist();
 });

 describe('render', () => {
  it('should render pause when started', () => {
   var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started"/>);
   var $el = $(ReactDOM.findDOMNode(controls));
   var $pauseButton = $el.find('button:contains(PAUSE)');

   expect($pauseButton.length).toBe(1);

  });

  it('should render start when paused', () => {
   var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused"/>);
   var $el = $(ReactDOM.findDOMNode(controls));
   var $startButton = $el.find('button:contains(START)');

   expect($startButton.length).toBe(1);

  });
 });
});
