/* global describe it */
import {expect} from 'chai';

import * as types from '../src/actions/types';
import actions from '../src/actions/actions';


describe('actions.postBetsRequest and types.POST_BETS_REQUEST', function () {
  it('should be a function that returns an object', function () {
    expect(actions.postBetsRequest).to.be.a('function');
    expect(actions.postBetsRequest()).to.be.an('object');
  });
  it('should have a type POST_BETS_REQUEST', function () {
    expect(types.POST_BETS_REQUEST).to.exist;
  });
  it('should have a type key, which value is POST_BETS_REQUEST', function () {
    let test = actions.postBetsRequest();
    expect(test.type).to.equal('POST_BETS_REQUEST');
  });
});
describe('actions.postBetsSuccess and types.POST_BETS_SUCCESS', function () {
  it('should be a function that returns an object', function () {
    expect(actions.postBetsSuccess).to.be.a('function');
    expect(actions.postBetsSuccess()).to.be.an('object');
  });
  it('should have a type POST_BETS_SUCCESS', function () {
    expect(types.POST_BETS_SUCCESS).to.exist;
  });
  it('should take one argument and have a type and key, which value is POST_BETS_SUCCESS and data\'s value respectively', function () {
    let test = actions.postBetsSuccess('Data');
    expect(test.data).to.equal('Data');
    expect(test.type).to.equal('POST_BETS_SUCCESS');
    expect(actions.postBetsSuccess.length).to.equal(1);
  });
});
describe('actions.postBetsError and types.POST_BETS_ERROR', function () {
  it('should be a function that returns an object', function () {
    expect(actions.fetchBetsError).to.be.a('function');
    expect(actions.fetchBetsError()).to.be.an('object');
  });
  it('should have a type FETCH_BETS_ERROR', function () {
    expect(types.FETCH_BETS_ERROR).to.exist;
  });
  it('should take one arguemnt and have a type and key, which value is FETCH_BETS_ERROR and error\'s value respectively', function () {
    let test = actions.fetchBetsError('Error');
    expect(test.error).to.equal('Error');
    expect(test.type).to.equal('FETCH_BETS_ERROR');
    expect(actions.fetchBetsError.length).to.equal(1);
  });
});
