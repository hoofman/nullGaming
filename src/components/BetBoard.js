import React from 'react';
import {connect} from 'react-redux';

import BetCard from './BetCard';
import actions from '../actions/actions';
import './BetBoard';

const BetBoard = React.createClass({
  componentWillMount: function () {
    this.props.fetchBets();
  },
  getBets: function () {
    if (this.props.loading) return <img src={'/images/default.svg'} />;
    const bets = this.props.market.map((bet, i) => {
      return <BetCard key={i} id={bet.bet_id} event={bet.event} name={bet.name} odds={bet.odds} />;
    });
    return bets;
  },
  render: function () {
    return (
      <div id='betBoardTitle'>
        <div>
          <ul className='list-group'>
            {this.getBets()}
          </ul>
        </div>
      </div>
    );
  }
});

function mapStateToProps (state) {
  return {
    market: state.market,
    loading: state.loading
  };
}

function mapDispatchToProps (dispatch) {
  return {
    fetchBets: () => {
      dispatch(actions.fetchBets());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BetBoard);
