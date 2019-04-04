import request from 'superagent';
import async from 'async';

import * as types from './types';
import config from '../../config';
import helpers from '../../helpers';

const actions = {};
const ROOT = config.ROOT;

actions.fetchBets = function () {
  return (dispatch) => {
    dispatch(actions.fetchBetsRequest());
    request
      .get(`${ROOT}/markets`)
      .end((err, res) => {
        if (err) dispatch(actions.fetchBetsError(err));
        dispatch(actions.fetchBetsSuccess(res.body));
      });
  };
};

actions.postBets = function (bet) {
  var newBet = helpers.createNewBets(bet);
  return (dispatch) => {
    if (newBet === 'Error') {
      return dispatch(actions.postBetsError('No valid bets'));
    }
    async.mapSeries(newBet, function (bet, cb) {
      dispatch(actions.postBetsRequest());
      request
      .post(`${ROOT}/bets`)
      .type('json')
      .send({bet_id: bet.bet_id, odds: bet.odds, stake: bet.stake})
      .end((err, res) => {
        if (err) cb(err);
        else cb(null, res);
      });
    }, function (err, res) {
      if (err) dispatch(actions.postBetsError(err));
      else dispatch(actions.postBetsSuccess(res));
    });
  };
};

actions.addBets = function (data) {
  return {
    type: types.ADD_TO_MYBETS,
    data
  };
};

actions.removeBets = function (data) {
  return {
    type: types.REMOVE_FROM_MYBETS,
    data
  };
};

actions.incrementStake = function (id, stake) {
  return {
    type: types.INCREMENT_STAKE,
    id,
    stake
  };
};

actions.decrementStake = function (id, stake) {
  return {
    type: types.DECREMENT_STAKE,
    id,
    stake
  };
};

actions.fetchBetsRequest = function () {
  return {
    type: types.FETCH_BETS_REQUEST
  };
};

actions.fetchBetsError = function (error) {
  return {
    type: types.FETCH_BETS_ERROR,
    error
  };
};

actions.fetchBetsSuccess = function (data) {
  return {
    type: types.FETCH_BETS_SUCCESS,
    data
  };
};

actions.postBetsRequest = function () {
  return {
    type: types.POST_BETS_REQUEST
  };
};

actions.postBetsError = function (error) {
  return {
    type: types.POST_BETS_ERROR,
    error
  };
};

actions.postBetsSuccess = function (data) {
  return {
    type: types.POST_BETS_SUCCESS,
    data
  };
};

actions.closeReciept = function () {
  return {
    type: types.CLOSE_RECIEPT
  };
};

export default actions;
