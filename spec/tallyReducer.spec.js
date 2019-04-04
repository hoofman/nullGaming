/* global describe it */
import {expect} from 'chai';

import reducer from '../src/reducers/reducer';
import actions from '../src/actions/actions';

describe('reducer', function () {
  describe('INCREMENT_STAKE', function () {
    it('should increment the stake property', function () {
      let state = {bets: [{id: 1, stake: 0, odds: {numerator: 2, denominator: 1}}]};
      let newState = reducer(state, actions.incrementStake(1, 10));
      expect(newState.bets[0].stake).to.eql(10);
    });
    it('should add to the tally on the state', function () {
      let state = {bets: [{id: 1, stake: 0, odds: {numerator: 2, denominator: 1}}], tally: 0};
      let newState = reducer(state, actions.incrementStake(1, 10));
      expect(newState.tally).to.equal(10);
    });
    it('should add potential winnings to the state', function () {
      let state = {bets: [{id: 1, stake: 0, odds: {numerator: 2, denominator: 1}}], potentialWin: 0};
      let newState = reducer(state, actions.incrementStake(1, 10));
      expect(newState.potentialWin).to.equal(20);
    });
  });
  describe('DECREMENT_STAKE', function () {
    it('should decrement the stake property', function () {
      let state = {bets: [{id: 1, stake: 10, odds: {numerator: 2, denominator: 1}}]};
      let newState = reducer(state, actions.decrementStake(1, 10));
      expect(newState.bets[0].stake).to.eql(0);
    });
    it('should never go below 0, including if client attempts to decrement stake by more than stakes value', function () {
      let state = {bets: [{id: 1, stake: 0, odds: {numerator: 2, denominator: 1}}]};
      let newState = reducer(state, actions.decrementStake(1, 10));
      expect(newState.bets[0].stake).to.eql(0);
      newState = reducer(state, actions.incrementStake(1, 10));
      expect(newState.bets[0].stake).to.eql(10);
      let finalState = reducer(newState, actions.decrementStake(1, 30));
      expect(finalState.bets[0].stake).to.eql(0);
    });
    it('should minus the tally on the state', function () {
      let state = {bets: [{id: 1, stake: 10, odds: {numerator: 2, denominator: 1}}], tally: 10};
      let newState = reducer(state, actions.decrementStake(1, 10));
      expect(newState.tally).to.equal(0);
    });
    it('should minus potential winnings to the state', function () {
      let state = {bets: [{id: 1, stake: 20, odds: {numerator: 2, denominator: 1}}], potentialWin: 40};
      let newState = reducer(state, actions.decrementStake(1, 10));
      expect(newState.potentialWin).to.equal(20);
    });
  });
});
