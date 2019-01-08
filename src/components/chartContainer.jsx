import React, { Component } from "react";
import Chart from "./chart";

class ChartContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      charts: this.props.charts,
      loadChartData: this.props.loadChartData,
      clearChart: this.props.clearChart
    };
  }
  // Renders the 2 x 2 chart grid.
  render() {
    let charts = this.props.charts.map((chart, index) => (
      <div key={index} className={"col span_" + ((index % 2) + 1) + "_of_2"}>
        <Chart
          loadChartData={this.props.loadChartData}
          clearChart={this.props.clearChart}
          chart={chart}
          chartNumber={index}
        />
      </div>
    ));

    return (
      <div className="chart-container">
        <React.Fragment>{charts}</React.Fragment>
      </div>
    );
  }
}

export default ChartContainer;
