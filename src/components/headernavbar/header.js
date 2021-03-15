import React, { Component } from "react";

import FootballDecal from "../../../static/assets/auth/images/Football Decal Image.jpg";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <img src={FootballDecal} />
      </div>
    );
  }
}

export default Header;
