import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import CountdownForm from './../../components/CountdownForm';
import $ from "jquery";


describe('CountdownForm', () => {
 it('should exist', () => {
  expect(CountdownForm).toExist();
 });

 it('Should call onSetCountDown if valid seconds entered', () => {
  var spy = expect.createSpy();
  var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountDown={spy}/>);
  var $el = $(ReactDOM.findDOMNode(countdownForm));

  countdownForm.refs.seconds.value = '109';
  TestUtils.Simulate.submit($el.find('form')[0]);

  expect(spy).toHaveBeenCalledWith(109);
 });

 it('Should not call onSetCountDown if invalid seconds entered', () => {
  var spy = expect.createSpy();
  var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountDown={spy}/>);
  var $el = $(ReactDOM.findDOMNode(countdownForm));

  countdownForm.refs.seconds.value = '109b';
  TestUtils.Simulate.submit($el.find('form')[0]);

  expect(spy).toNotHaveBeenCalled();
 });
});
