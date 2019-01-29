import React, { Component } from "react";
import Chart from "./chart";

class ChartContainer extends Component {
  // Renders the 2 x 2 chart grid.
  render() {
    let charts = this.props.charts.map((chart, index) => (
      <div key={index} className={"col span_" + ((index % 2) + 1) + "_of_2"}>
        <Chart
          loadChart={this.props.loadChart}
          clearChart={this.props.clearChart}
          changeChartPage={this.props.changeChartPage}
          chart={chart}
          chartInfo={this.props.chartInfo[index]}
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
