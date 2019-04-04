import React from 'react';
import {connect} from 'react-redux';
import Modal from 'react-modal';

import actions from '../actions/actions';
import helpers from '../../helpers';

const customStyles = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: '500px',
    overlfow: 'scroll'
  }
};

const Reciept = React.createClass({
  render: function () {
    return (
      <div>
        <Modal
          isOpen={this.props.modal}
          style={customStyles}
          contentLabel='Example Modal'
          >
          <h2 ref='subtitle'>Reciept</h2>
          <div>{this.props.reciept.map((transaction, i) => {
            if (transaction.tally) {
              return (
                <div>
                  <p>Total Stake: <i className='fa fa-gbp'></i>{helpers.formatMoney(transaction.tally)}</p>
                  <p>Potential winnings: <i className='fa fa-gbp'></i>{helpers.formatMoney(transaction.potentialWin)}</p>
                </div>
              );
            } else {
              let parsed = JSON.parse(transaction.text);
              return (
                <div>
                  <p>name of bet: {parsed.name} to win {parsed.event}</p>
                  <p>odds: {parsed.odds.numerator} / {parsed.odds.denominator}</p>
                  <p>stake: <i className='fa fa-gbp'></i>{helpers.formatMoney(parsed.stake)}</p>
                  <p>transaction reference: {parsed.transaction_id}</p>
                </div>
              );
            }
          })}
          </div>
          <button onClick={this.props.closeReciept}>close</button>
        </Modal>
      </div>
    );
  }
});

function mapStateToProps (state) {
  return {
    reciept: state.reciept,
    modal: state.modal
  };
}

function mapDispatchToProps (dispatch) {
  return {
    closeReciept: () => {
      dispatch(actions.closeReciept());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Reciept);
