import React from 'react';
import {connect} from 'react-redux';

import actions from '../actions/actions';

const BetCard = React.createClass({
  addBet: function (e) {
    return this.props.addBets(e.target.value);
  },
  render: function () {
    return (
        <li className='list-group-item' id='betCards'>
          <button onClick={this.addBet} className='btn btn-primary'>
            {this.props.name} to win the {this.props.event}
          </button>
          <span className='badge'>{this.props.odds.numerator}-{this.props.odds.denominator}</span>
        </li>
    );
  }
});

function mapDispatchToProps (dispatch, props) {
  return {
    addBets: () => {
      dispatch(actions.addBets(props));
    }
  };
}

export default connect(null, mapDispatchToProps)(BetCard);
