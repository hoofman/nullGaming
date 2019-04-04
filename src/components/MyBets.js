import React from 'react';
import {connect} from 'react-redux';

import BetSlip from './BetSlip';
import actions from '../actions/actions';
import helpers from '../../helpers';

const MyBets = React.createClass({
  getBets: function () {

    const bets = this.props.myBets.map((bet, i) => {
      
      return <BetSlip key={i} id={bet.id} stake={bet.stake} event={bet.event} name={bet.name} odds={bet.odds} />;
    });
    console.log(bets);
    return bets;
  },
  postBets: function (data) {
    return this.props.postBets(data);
  },
  render: function () {
    return (
      <div id='myBets'>
        <ul className='list-group'>
          <h2>Betting Slip: </h2>
          {this.getBets()}
        </ul>
        <h3>Total stake: <i className='fa fa-gbp' />{helpers.formatMoney(this.props.tally)}</h3>
        <h3>Your potential win: <i className='fa fa-gbp' />{helpers.formatMoney(this.props.potentialWin)}</h3>
        <button onClick={this.postBets.bind(null, this.props.myBets)} className='btn btn-primary'>Play Bets</button>
      </div>
    );
  }
});

function mapStateToProps (state) {
  return {
    myBets: state.bets,
    tally: state.tally,
    potentialWin: state.potentialWin
  };
}

function mapDispatchToProps (dispatch, props) {
  return {
    postBets: (data) => {
      dispatch(actions.postBets(data));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyBets);
