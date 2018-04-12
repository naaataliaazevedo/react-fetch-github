import React from 'react';
import Menu from './menu.js';
export class Header extends React.Component {
  render() {
    return (
      <section className="container-header">
        <div className="box-logo">
          <h1>naatazevedo</h1>
        </div>
        <Menu />
      </section>
    );
  }
}

export default Header;