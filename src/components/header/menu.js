import React from 'react';

export class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true,
    };
    this.handleClickMenu = this.handleClickMenu.bind(this);
  }

  handleClickMenu(ev) {
    ev.preventDefault();

    this.setState({
      isHidden: !this.state.isHidden,
    });
  }

  render() {
    const { isHidden } = this.state;
    let menuToggle = isHidden ? 'inactive' : 'active';

    return (
      <div className="box-menu">
        <div onClick={this.handleClickMenu}>icone do menu aqui</div>
        <ul className={menuToggle}>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>
    );
  }
}

export default Menu;
