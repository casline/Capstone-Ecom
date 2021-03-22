import React, { Component } from "react";
import { connect } from "react-redux";

import FootballDecal from "../../../static/assets/auth/images/Football Decal Image.jpg";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <img className="header__img" src={FootballDecal} />
        <div className="header__links">
          {this.props.headerLinks.map((link, index) => {
            return (
              <a
                className="header__link"
                key={index}
                onClick={() => console.log("trying to switch tab")}
              >
                {link.title}
              </a>
            );
          })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { headerLinks } = state.headerNavbar;
  return {
    headerLinks,
  };
}

Header = connect(mapStateToProps)(Header);

export default Header;
