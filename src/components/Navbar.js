import React from 'react';

const NavbarBurger = props => (
  <button
    onClick={props.toggleMenu}
    className={`button navbar-burger ${props.active ? 'is-active' : ''}`}
  >
    <span />
    <span />
    <span />
  </button>
);

export default class Navbar extends React.Component {
  state = {
    activeMenu: false,
  };
  toggleMenu = () => {
    this.setState({
      activeMenu: !this.state.activeMenu,
    });
  };
  render() {
    return (
      <nav className={`navbar is-fixed-top`}>
        <div className="navbar-brand">
          <NavbarBurger
            active={this.state.activeMenu}
            toggleMenu={this.toggleMenu}
          />
        </div>
        <div
          className={`navbar-menu ${this.state.activeMenu ? 'is-active' : ''}`}
        >
          <div className="navbar-start" style={{backgroundColor: '#2eccbd', flexGrow: 1, justifyContent: 'center'}}>
            <a className="navbar-item is-capitalized has-text-grey-dark" href="/">
                Home
            </a>
            <a className="navbar-item is-capitalized has-text-grey-dark" href="/about">
                About
            </a>
            <a className="navbar-item is-capitalized has-text-grey-dark" href="/contact">
                Contact
            </a>
          </div>
        </div>
      </nav>
    );
  }
}
