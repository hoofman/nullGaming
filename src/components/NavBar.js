import React from 'react';

const NavBar = React.createClass({
  render: function () {
    return (
      <nav className='navbar navbar-default'>
        <div className='container-fluid'>
          <div className='navbar-header navbar-left'>
            <a className='navbar-brand' href='/'><img src={'/images/logo.png'} width='50%' /></a>
          </div>
          <div className='collapse navbar-collapse navbar-center' id='bs-example-navbar-collapse-1'>
            <ul className='nav navbar-nav'>
              <li><a href='#'>Sport</a></li>
              <li><a href='#'>Casino</a></li>
              <li><a href='#'>Bingo</a></li>
              <li><a href='#'>Poker</a></li>
            </ul>
            <ul className='nav navbar-nav navbar-right'>
              <li><form className='navbar-form'>
                <div className='form-group'>
                  <input type='text' className='form-control' placeholder='Username' />
                </div>
                <div className='form-group'>
                  <input type='password' className='form-control' placeholder='Password' />
                </div>
                <button type='submit' className='btn btn-default'>Log in</button>
              </form></li>
              <li><a href='#'><i className='fa fa-facebook' /></a></li>
              <li><a href='#'><i className='fa fa-twitter' /></a></li>
              <li><a href='#'><i className='fa fa-instagram' /></a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
});

export default NavBar;
