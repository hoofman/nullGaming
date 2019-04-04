/* global describe it */
import {expect} from 'chai';
// const { expect, use } = require('chai');
// const types = require('../src/actions/types.js');
// const actions = require('../src/actions/actions.js');

import * as types from '../src/actions/types';
import actions from '../src/actions/actions';

describe('actions.addBets and type ADD_TO_MYBETS', function () {
  it('should be a function that returns an object', function () {
    expect(actions.addBets).to.be.a('function');
    expect(actions.addBets()).to.be.an('object');
  });
  it('should have a type ADD_TO_MYBETS', function () {
    expect(types.ADD_TO_MYBETS).to.exist;
  });
  it('should take one arguemnt and have a type and key, which value is ADD_TO_MYBETS and data\'s value respectively', function () {
    let test = actions.addBets('Data');
    expect(test.data).to.equal('Data');
    expect(test.type).to.equal('ADD_TO_MYBETS');
    expect(actions.addBets.length).to.equal(1);
  });
});
describe('actions.removeBets and type REMOVE_FROM_MYBETS', function () {
  it('should be a function that returns an object', function () {
    expect(actions.removeBets).to.be.a('function');
    expect(actions.removeBets()).to.be.an('object');
  });
  it('should have a type REMOVE_FROM_MYBETS', function () {
    expect(types.REMOVE_FROM_MYBETS).to.exist;
  });
  it('should take one argument and have a type and key, which value is REMOVE_FROM_MYBETS and data\'s value respectively', function () {
    let test = actions.removeBets('Data');
    expect(test.data).to.equal('Data');
    expect(test.type).to.equal('REMOVE_FROM_MYBETS');
    expect(actions.removeBets.length).to.equal(1);
  });
});
