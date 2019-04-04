/* global describe it */
import {expect} from 'chai';

import * as types from '../src/actions/types';
import actions from '../src/actions/actions';

describe('actions.incrementBet and type INCREMENT_STAKE', function () {
  it('should be a function that returns an object', function () {
    expect(actions.incrementStake).to.be.a('function');
    expect(actions.incrementStake()).to.be.an('object');
  });
  it('should have a type INCREMENT_STAKE', function () {
    expect(types.INCREMENT_STAKE).to.exist;
  });
  it('should take two arguments - id and stake key and the type INCREMENT_STAKE', function () {
    let test = actions.incrementStake('Id', 'Stake');
    expect(test.id).to.equal('Id');
    expect(test.stake).to.equal('Stake');
    expect(test.type).to.equal('INCREMENT_STAKE');
    expect(actions.incrementStake.length).to.equal(2);
  });
});
describe('actions.decrementStake and type DECREMENT_STAKE', function () {
  it('should be a function that returns an object', function () {
    expect(actions.decrementStake).to.be.a('function');
    expect(actions.decrementStake()).to.be.an('object');
  });
  it('should have a type DECREMENT_STAKE', function () {
    expect(types.DECREMENT_STAKE).to.exist;
  });
  it('should take two arguments - id and stake key and the type DECREMENT_STAKE', function () {
    let test = actions.decrementStake('Id', 'Stake');
    expect(test.id).to.equal('Id');
    expect(test.stake).to.equal('Stake');
    expect(test.type).to.equal('DECREMENT_STAKE');
    expect(actions.decrementStake.length).to.equal(2);
  });
});
