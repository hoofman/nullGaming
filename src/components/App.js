import React from 'react';

import NavBar from './NavBar';
import Body from './Body';

const App = React.createClass({
  render () {
    return (
      <div>
        <NavBar />
        <Body id='body'/>
      </div>
    );
  }
});

export default App;
