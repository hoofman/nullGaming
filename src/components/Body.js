import React from 'react';

import BetBoard from './BetBoard';
import MyBets from './MyBets';
import Reciept from './Reciept';

const Body = React.createClass({
  render: function () {
    return (
      <div className='container'>
        <div className='jumbotron col-md-6' id='betBoard'>
          <BetBoard />
        </div>
        <div className='jumbotron col-md-6' id='betSlip'>
          <MyBets />
        </div>
        <Reciept />
      </div>
    );
  }
});

export default Body;
