const helpers = {};

helpers.containsId = function (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].id === val) return true;
  }
  return false;
};

helpers.tallyTotal = function (arr) {
  let total = 0;
  for (var i = 0; i < arr.length; i++) {
    total += arr[i].stake;
  }
  return total;
};

helpers.tallyPotentialWin = function (arr, bet) {
  let total = 0;
  if (!arr) {
    let wager = bet.odds.numerator / bet.odds.denominator;
    total += (wager * bet.stake);
  } else {
    for (var i = 0; i < arr.length; i++) {
      let wager = arr[i].odds.numerator / arr[i].odds.denominator;
      total += (wager * arr[i].stake);
    }
  }
  return total;
};

helpers.createNewBets = function (arr) {
  var newBets = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].stake !== 0) {
      newBets.push({bet_id: arr[i].id, odds: arr[i].odds, stake: arr[i].stake});
    }
  }
  if (newBets.length === 0) {
    return 'Error';
  } else {
    return newBets;
  }
};

helpers.formatMoney = function (num) {
  var stringNum = num.toString();
  if(stringNum.indexOf('.') !== -1) {
    stringNum = Math.round(num).toString();
  }
  if (stringNum.length <= 2) {
    return +`0.${num}`;
  } else {
    let pounds = stringNum.slice(0, stringNum.length - 2);
    let pence = stringNum.slice(stringNum.length - 2);
    return +`${pounds}.${pence}`;
  }
};

export default helpers;
