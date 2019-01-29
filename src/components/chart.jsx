import React, { Component } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import ChartDialog from "./chartDialog";
import Popover from "react-bootstrap/lib/Popover";
import OverlayTrigger from "react-bootstrap/lib/OverlayTrigger";

class Chart extends Component {
  handleRemovePage = () => {
    this.props.clearChart(this.props.chartNumber);
  };

  handleLoadNextPage = () => {
    if (this.props.chartInfo[2] < 3) {
      this.props.changeChartPage(this.props.chartNumber, +1);
    }
  };

  handleLoadPreviousPage = () => {
    if (this.props.chartInfo[2] > 1) {
      this.props.changeChartPage(this.props.chartNumber, -1);
    }
  };

  // Render chart if data is present, button to open dialog if not.
  render() {
    let chartElement;
    let nextButton =
      this.props.chartInfo[2] == "3" ? "chart-button-disabled" : "chart-button";
    let previousButton =
      this.props.chartInfo[2] == "1" ? "chart-button-disabled" : "chart-button";

    if (this.props.chart.series) {
      chartElement = (
        <React.Fragment>
          <HighchartsReact highcharts={Highcharts} options={this.props.chart} />
          <span className="chart-button-container">
            <OverlayTrigger
              trigger={["hover", "focus"]}
              overlay={previousTooltip}
            >
              <button
                className={previousButton}
                onClick={this.handleLoadPreviousPage}
              >
                <i className="fas fa-angle-left" />
              </button>
            </OverlayTrigger>
            <OverlayTrigger trigger={["hover", "focus"]} overlay={nextTooltip}>
              <button className={nextButton} onClick={this.handleLoadNextPage}>
                <i className="fas fa-angle-right" />
              </button>
            </OverlayTrigger>
            <OverlayTrigger trigger={["hover", "focus"]} overlay={closeTooltip}>
              <button className="chart-button" onClick={this.handleRemovePage}>
                <i className="fas fa-times" />
              </button>
            </OverlayTrigger>
          </span>
        </React.Fragment>
      );
    } else {
      chartElement = (
        <ChartDialog
          chart={this.props.chart}
          chartInfo={this.props.chartInfo}
          loadChart={this.props.loadChart}
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

const nextTooltip = (
  <Popover id="popover-trigger-hover-focus">Next page</Popover>
);

const previousTooltip = (
  <Popover id="popover-trigger-hover-focus">Previous page</Popover>
);

export default Chart;
