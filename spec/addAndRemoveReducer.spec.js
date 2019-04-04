/* global describe it */
import {expect} from 'chai';

import reducer from '../src/reducers/reducer';
import actions from '../src/actions/actions';

describe('reducer', function () {
  describe('ADD_TO_MYBETS', function () {
    it('should add an element to the bets array and add an stake property', function () {
      let state = {bets: []};
      let newState = reducer(state, actions.addBets({test: 'test'}));
      expect(newState.bets).to.eql([{test: 'test', stake: 0}]);
    });
    it('should not duplicate bet that already exists in bets array', function () {
      let state = {bets: [{id: 2}]};
      let newState = reducer(state, actions.addBets({id: 2}));
      expect(newState.bets).to.eql([{id: 2}]);
      expect(newState.bets.length).to.eql(1);
    });
  });
  describe('REMOVE_FROM_MYBETS', function () {
    it('should remove an element from bets array', function () {
      let state = { bets: [{id: 3, stake: 10, odds: {numerator: 2, denominator: 1}}] };
      let newState = reducer(state, actions.removeBets({id: 3}));
      expect(newState.bets).to.eql([]);
    });
    it('should remove the bet stake from the tally', function () {
      let state = { bets: [{id: 1, stake: 20, odds: {numerator: 2, denominator: 1}}], tally: 40 };
      let newState = reducer(state, actions.removeBets({id: 1}));
      expect(newState.tally).to.equal(20);
    });
    it('shuold remove the bet stake from the potentialWin', function () {
      let state = { bets: [{id: 2, stake: 10, odds: {numerator: 10, denominator: 1}}], potentialWin: 200 };
      let newState = reducer(state, actions.removeBets({id: 2}));
      expect(newState.potentialWin).to.equal(100);
    });
  });
});
