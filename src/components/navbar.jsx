import React from "react";
import LightSwitch from "./lightSwitch";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <a
          className="navbar-brand"
          href="https://ctamas.github.io/swapiCharts/"
        >
          <i className="far fa-chart-bar" />
          <span id="title">Star Wars API React Charts</span>
          <LightSwitch
            lightSwitched={this.props.lightSwitched}
            onLightSwitch={this.props.onLightSwitch}
            id="lightSwitch"
          />
        </a>
      </nav>
    );
  }
}
export default Navbar;
