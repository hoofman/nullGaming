/* global describe it */
import {expect} from 'chai';

import reducer from '../src/reducers/reducer';
import actions from '../src/actions/actions';

describe('reducer', function () {
  describe('FETCH_BETS_REQUEST', function () {
    it('should set loading to true', function () {
      let state = {market: [], loading: false, error: null};
      let newState = reducer(state, actions.fetchBetsRequest());
      expect(newState.loading).to.equal(true);
    });
  });
  describe('FETCH_BETS_SUCCESS', function () {
    it('should update the \'market\' property with new data and change \'loading\' to false', function () {
      let state = {market: [], loading: false, error: null};
      state = reducer(state, actions.fetchBetsRequest());
      expect(state.loading).to.equal(true);
      let newState = reducer(state, actions.fetchBetsSuccess('test'));
      expect(newState.market).to.equal('test');
      expect(newState.loading).to.equal(false);
    });
  });
  describe('FETCH_BETS_ERROR', function () {
    it('should update the \'error\' property to the error, and change \'loading\' to false', function () {
      let state = {market: [], loading: false, error: null};
      state = reducer(state, actions.fetchBetsRequest());
      expect(state.loading).to.equal(true);
      let newState = reducer(state, actions.fetchBetsError('Error message'));
      expect(newState.error).to.equal('Error message');
      expect(newState.loading).to.equal(false);
    });
  });
});
