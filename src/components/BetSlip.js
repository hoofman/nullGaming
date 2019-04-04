import React from 'react';
import {connect} from 'react-redux';

import actions from '../actions/actions';
import helpers from '../../helpers';

const BetSlip = React.createClass({
  removeBet: function (e) {
    return this.props.removeBets(e.target.value);
  },
  addToTally: function (id, stake) {
    return this.props.incrementStake(id, stake);
  },
  takeFromTally: function (id, stake) {
    return this.props.decrementStake(id, stake);
  },
  render: function () {
    return (
      <div>
        <li className='list-group-item' id='eachBet' value={this.props.id}>
          <span className='badge'>{this.props.odds.numerator}-{this.props.odds.denominator}</span>
          {this.props.name} to win the {this.props.event}
          <div>
            <h1><i className='fa fa-gbp'></i>{helpers.formatMoney(this.props.stake)}</h1>
            <button onClick={this.addToTally.bind(null, this.props.id, 10, this.props.odds)} className='btn btn-primary'>+0.10</button>
            <button onClick={this.addToTally.bind(null, this.props.id, 500, this.props.odds)} className='btn btn-primary'>+5</button>
            <button onClick={this.addToTally.bind(null, this.props.id, 1000, this.props.odds)} className='btn btn-primary'>+10</button>
            <button onClick={this.takeFromTally.bind(null, this.props.id, 10, this.props.odds)} className='btn btn-primary'>-0.10</button>
            <button onClick={this.takeFromTally.bind(null, this.props.id, 500, this.props.odds)} className='btn btn-primary'>-5</button>
            <button onClick={this.takeFromTally.bind(null, this.props.id, 1000, this.props.odds)} className='btn btn-primary'>-10</button>
          </div>
          <button onClick={this.removeBet} className='btn btn-primary'>Remove</button>
        </li>
      </div>
    );
  }
});

function mapStateToProps (state) {
  return {
    tally: state.tally
  };
}

function mapDispatchToProps (dispatch, props) {
  return {
    removeBets: () => {
      dispatch(actions.removeBets(props));
    },
    incrementStake: (id, stake) => {
      dispatch(actions.incrementStake(id, stake));
    },
    decrementStake: (id, stake) => {
      dispatch(actions.decrementStake(id, stake));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BetSlip);
