import * as types from '../actions/types';
import helpers from '../../helpers';

const initialState = {
  market: [],
  error: null,
  loading: false,
  bets: [],
  potentialWin: 0,
  tally: 0,
  reciept: [],
  modal: false
};

function reducer (prevstate = initialState, action) {
  if (!action) return prevstate;
  var newState = Object.assign({}, prevstate);

  switch (action.type) {
    case types.FETCH_BETS_REQUEST:
      newState.loading = true;
      break;
    case types.FETCH_BETS_SUCCESS:
      newState.loading = false;
      newState.market = action.data;
      break;
    case types.FETCH_BETS_ERROR:
      newState.loading = false;
      newState.error = action.error;
      break;
    case types.POST_BETS_REQUEST:
      newState.loading = true;
      break;
    case types.POST_BETS_SUCCESS:
      newState.loading = false;
      let totalBet = [{tally: prevstate.tally, potentialWin: prevstate.potentialWin}];
      newState.reciept = action.data.concat(totalBet);
      newState.tally = 0;
      newState.potentialWin = 0;
      newState.bets = [];
      newState.modal = true;
      break;
    case types.POST_BETS_ERROR:
      newState.loading = false;
      newState.error = action.error;
      break;
    case types.ADD_TO_MYBETS:
      if (helpers.containsId(prevstate.bets, action.data.id)) {
        newState.bets = prevstate.bets.slice();
      } else {
        let newBet = Object.assign({}, action.data);
        newBet.stake = 0;
        newState.bets = prevstate.bets.concat([newBet]);
      }
      break;
    case types.REMOVE_FROM_MYBETS:
      const newArr = [];
      prevstate.bets.forEach((element) => {
        if (element.id !== action.data.id) {
          newArr.push(element);
        } else {
          newState.tally = (prevstate.tally - element.stake);
          newState.potentialWin = (prevstate.potentialWin - helpers.tallyPotentialWin(null, element));
        }
      });
      newState.bets = newArr;
      break;
    case types.INCREMENT_STAKE:
      prevstate.bets.forEach((element) => {
        if (element.id === action.id) {
          let oldPotentialWin = helpers.tallyPotentialWin(null, element);
          element.stake = element.stake += action.stake;
          newState.tally = (prevstate.tally + action.stake);
          newState.potentialWin = (prevstate.potentialWin - oldPotentialWin) + helpers.tallyPotentialWin(null, element);
        }
      });
      newState.bets = prevstate.bets.slice();
      break;
    case types.DECREMENT_STAKE:
      var newBets = prevstate.bets.map((element) => {
        if (element.id === action.id) {
          let oldPotentialWin = helpers.tallyPotentialWin(null, element);
          if (element.stake <= 0) return prevstate.bets;
          else if ((element.stake - action.stake) < 0) {
            element.stake = 0;
            newState.tally = 0;
            newState.potentialWin = 0;
            return prevstate.bets;
          } else {
            element.stake = (element.stake -= action.stake);
            newState.tally = (prevstate.tally - action.stake);
            newState.potentialWin = (prevstate.potentialWin - oldPotentialWin) + helpers.tallyPotentialWin(null, element);
          }
        }
        return prevstate.bets;
      });
      newState.bets = newBets[0].slice();
      break;
    case types.CLOSE_RECIEPT:
      newState.modal = false;
      break;
    default:
      return prevstate;
  }
  return newState;
}

export default reducer;
