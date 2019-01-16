import React from "react";
import Popover from "react-bootstrap/lib/Popover";
import OverlayTrigger from "react-bootstrap/lib/OverlayTrigger";

class LightSwitch extends React.Component {
  // The light switch is the trigger for dark/light mode.
  render() {
    return (
      <span id="light-switch-container" className="btn-group-toggle">
        <OverlayTrigger
          placement="left"
          trigger={["hover"]}
          overlay={darkThemeToolTip}
        >
          <label className="btn btn-secondary">
            <i className={this.getSwitchIcon()} />
            <input
              name="lightSwitch"
              type="checkbox"
              checked={this.props.lightSwitched}
              onChange={this.props.onLightSwitch}
            />
          </label>
        </OverlayTrigger>
      </span>
    );
  }

  getSwitchIcon() {
    let classes = "fa-lightbulb ";
    classes += this.props.lightSwitched ? "fas" : "far";
    return classes;
  }
}

const darkThemeToolTip = (
  <Popover id="popover-trigger-hover-focus">Toggle dark theme</Popover>
);

export default LightSwitch;
