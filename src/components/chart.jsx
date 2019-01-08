import React, { Component } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import ChartDialog from "./chartDialog";
import Popover from "react-bootstrap/lib/Popover";
import OverlayTrigger from "react-bootstrap/lib/OverlayTrigger";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      verticallyCenter: true
    };
  }

  handleRemoveChart = () => {
    this.props.clearChart(this.props.chartNumber);
  };

  // Render graph is data is present, render placeholder and call dialog if not.
  render() {
    let modalClose = () => this.setState({ modalShow: false });
    let chartElement;
    if (this.props.chart.series) {
      chartElement = (
        <React.Fragment>
          <HighchartsReact highcharts={Highcharts} options={this.props.chart} />
          <OverlayTrigger trigger={["hover", "focus"]} overlay={closeTooltip}>
            <button className="remove-chart" onClick={this.handleRemoveChart}>
              X
            </button>
          </OverlayTrigger>
        </React.Fragment>
      );
    } else {
      chartElement = (
        <ChartDialog
          show={this.state.modalShow}
          onHide={modalClose}
          loadChartData={this.props.loadChartData}
          chartNumber={this.props.chartNumber}
        />
      );
    }
    return chartElement;
  }
}

const closeTooltip = (
  <Popover id="popover-trigger-hover-focus">Close chart</Popover>
);

export default Chart;
