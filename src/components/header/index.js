import React from 'react';
import logo from '../../logo.svg';
import Menu from './menu.js';


export class Header extends React.Component {

  render() {
    return (
      <section className="container-header">
        <div className="box-logo">
          <img src={logo} alt="aaaa" />
        </div>
        <Menu />
      </section>
    );
  }
}

export default Header;