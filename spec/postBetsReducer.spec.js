/* global describe it */
import {expect} from 'chai';

import reducer from '../src/reducers/reducer';
import actions from '../src/actions/actions';

describe('reducer', function () {
  describe('POST_BETS_REQUEST', function () {
    it('should set loading to true', function () {
      let state = {bets: [], loading: false, error: null};
      let newState = reducer(state, actions.postBetsRequest());
      expect(newState.loading).to.equal(true);
    });
  });
  describe('POST_BETS_SUCCESS', function () {
    it('should update the \'reciept\' property with new data, set \'loading\' to false, set \'tally\' and\' potentialWin\' to zero, empty the array \'bets\' and set \'modal\' to true', function () {
      let state = {bets: [{test: 'test'}], loading: false, modal: false, reciept: [], tally: 10, potentialWin: 20};
      state = reducer(state, actions.postBetsRequest());
      expect(state.bets).to.eql([{test: 'test'}]);
      expect(state.loading).to.equal(true);
      expect(state.modal).to.equal(false);
      expect(state.reciept).to.eql([]);
      expect(state.tally).to.equal(10);
      expect(state.potentialWin).to.equal(20);
      let newState = reducer(state, actions.postBetsSuccess(['reciept data']));
      expect(newState.bets).to.eql([]);
      expect(newState.loading).to.equal(false);
      expect(newState.modal).to.equal(true);
      expect(newState.reciept).to.eql(['reciept data', {tally: 10, potentialWin: 20}]);
      expect(newState.tally).to.equal(0);
      expect(newState.potentialWin).to.equal(0);
    });
  });
  describe('FETCH_BETS_ERROR', function () {
    it('should update the \'error\' property to the error, and change \'loading\' to false', function () {
      let state = {bets: [], loading: false, error: null};
      state = reducer(state, actions.postBetsRequest());
      expect(state.loading).to.equal(true);
      let newState = reducer(state, actions.postBetsError('Error message'));
      expect(newState.error).to.equal('Error message');
      expect(newState.loading).to.equal(false);
    });
  });
});
