import React from "react";

class LightSwitch extends React.Component {
  // The light switch is the trigger for dark/light mode.
  render() {
    return (
      <span id="light-switch-container" className="btn-group-toggle">
        <label className="btn btn-secondary">
          <i className={this.getSwitchIcon()} />
          <input
            name="lightSwitch"
            type="checkbox"
            checked={this.props.lightSwitched}
            onChange={this.props.onLightSwitch}
          />
        </label>
      </span>
    );
  }

  getSwitchIcon() {
    let classes = "fa-lightbulb ";
    classes += this.props.lightSwitched ? "fas" : "far";
    return classes;
  }
}

export default LightSwitch;
