/* global describe it */
import request from 'supertest';
import {expect} from 'chai';

import * as types from '../src/actions/types';
import actions from '../src/actions/actions';
import {ROOT} from '../config';

describe('calls to api', function () {
  describe('actions.fetchBetsSuccess', function () {
    it('should callback with object of bets', function (done) {
      request(ROOT)
      .get(`/markets`)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.length).to.equal(6);
        expect(res.body[0]).to.eql(
          {
            "bet_id": 1,
            "event": "Next World Cup",
            "name": "England",
            "odds": {
              "numerator": 10,
              "denominator": 1
            }
          })
        done();
      });
    });
  });
  describe('actions.fetchBetsError', function () {
    it('should callback with a 404 error if route is not found', function (done) {
      request(ROOT)
      .get(`/wrongRoute`)
      .expect(404)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.error).to.equal('Not Found');
        done();
      });
    });
  });
  describe('actions.postBetsSuccess', function () {
    it('should callback with the successful bet and transaction id', function (done) {
      request(ROOT)
      .post('/bets')
      .type('json')
      .send({'bet_id': 2, 'odds': {'numerator': 2, 'denominator': 1}, 'stake': 1000})
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.bet_id).to.equal(2);
        expect(res.body.event).to.equal('Next World Cup');
        expect(res.body.name).to.equal('Brazil');
        expect(res.body.odds).to.eql({'numerator': 2, 'denominator': 1});
        expect(res.body.stake).to.equal(1000);
        expect(res.body.transaction_id).to.exist;
        done();
      });
    });
  });
  describe('actions.postBetsError', function () {
    it('should callback with the error if sent to wrong route', function (done) {
      request(ROOT)
      .post('/wrongRoute')
      .type('json')
      .send({'bet_id': 2, 'odds': {'numerator': 2, 'denominator': 1}, 'stake': 1000})
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.error).to.equal('Not Found');
        done();
      });
    });
  });
});
