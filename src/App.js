import React, { Component } from "react";
import "./App.css";
import ChartContainer from "./components/chartContainer";
import Navbar from "./components/navbar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      isLightSwitched: false,
      charts: [{}, {}, {}, {}],
      chartInfo: [
        ["starships", "crew", "1", 0, 220],
        [],
        [],
        ["people", "height", "2", 3, 220]
      ]
    };
    this.chartNames = [];

    // Load default charts from chart info
    for (let i = 0; i < 4; i++) {
      if (this.state.chartInfo[i].length) {
        this.loadChart(...this.state.chartInfo[i]);
      }
    }
  }

  handleLightSwitch = () => {
    let newCharts = [{}, {}, {}, {}];
    this.setState(
      {
        isLightSwitched: !this.state.isLightSwitched
      },
      // Wait for light switch status update before updating chart with new theme.
      () => {
        for (let i = 0; i < 4; i++) {
          // Only re-theme existing charts.
          if (this.state.charts[i].title) {
            Object.assign(newCharts[i], this.createChartBody(i));
          }
        }

        this.setState({
          charts: newCharts
        });
      }
    );
  };

  getCurrentTheme() {
    return this.state.isLightSwitched ? darkTheme : lightTheme;
  }

  getCurrentThemeName() {
    return this.state.isLightSwitched ? "dark-theme" : "light-theme";
  }

  render() {
    // Set global background to dark/light theme
    document.getElementsByTagName(
      "html"
    )[0].className = this.getCurrentThemeName();

    return (
      <React.Fragment>
        <div className={this.getCurrentThemeName()}>
          <Navbar
            lightSwitched={this.state.isLightSwitched}
            onLightSwitch={this.handleLightSwitch}
          />
          <ChartContainer
            id="chart-container"
            loadChart={this.loadChart.bind(this)}
            clearChart={this.clearChart.bind(this)}
            changeChartPage={this.changeChartPage.bind(this)}
            charts={this.state.charts}
            chartInfo={this.state.chartInfo}
          />
        </div>
      </React.Fragment>
    );
  }

  createChartBody = (chartNumber, data, category, subCategory) => {
    let theme = this.getCurrentTheme();
    let units;
    // This section deals with keeping old chart values where relevant while updating chart theme.
    this.chartNames[chartNumber] = category
      ? this.getChartTitle(category, subCategory)
      : this.chartNames[chartNumber];
    if (!this.state.charts[chartNumber].yAxis) {
      units = this.getUnitofMeasurement(subCategory);
    } else {
      units = this.state.charts[chartNumber].yAxis.title.text;
    }

    let chartTemplate = {
      title: {
        text: this.chartNames[chartNumber],
        style: {
          color: theme.textColor
        }
      },
      chart: {
        backgroundColor: theme.backgroundColor,
        type: "column"
      },
      legend: {
        enabled: false
      },
      xAxis: {
        labels: {
          style: {
            color: theme.textColor
          }
        },
        type: "category"
      },
      yAxis: {
        gridLineColor: theme.gridColor,
        labels: {
          style: {
            color: theme.textColor
          }
        },
        title: {
          style: {
            color: theme.textColor
          },
          text: units
        }
      },
      series: [
        {
          colorByPoint: true,
          data: data ? data : this.state.charts[chartNumber].series[0].data
        }
      ]
    };
    return chartTemplate;
  };

  loadChart = (category, subCategory, page, chartNumber, filter) => {
    let charts = this.state.charts;
    let chartInfo = this.state.chartInfo;
    chartInfo[chartNumber] = [category, subCategory, page, chartNumber, filter];
    // Let chart component know loading is in progress.
    charts[chartNumber] = { title: { text: "loading" } };
    // Load chart.
    this.setState({ charts: charts, chartInfo: chartInfo });
    fetch("https://swapi.dev/api/" + category + "/?page=" + page)
      .then(res => res.json())
      .then(
        result => {
          charts[chartNumber] = this.createChartBody(
            chartNumber,
            this.createChartData(result.results, subCategory, filter),
            category,
            subCategory
          );
          this.setState({
            isLoaded: true,
            charts: charts
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  };

  // Bring data from API to the format accepted by Highcharts.
  createChartData = (category, subCategory, filter) => {
    let requestData = [];
    for (let element of category) {
      if (parseInt(element[subCategory]) < filter) {
        requestData.push({
          name: element.name,
          y: parseInt(element[subCategory])
        });
      }
    }

    return requestData;
  };

  getUnitofMeasurement = subCategory => {
    let unit;
    if (subCategory === "crew" || subCategory === "passengers") {
      unit = "People";
    } else if (subCategory === "length") {
      unit = "Meters";
    } else if (subCategory === "mass") {
      unit = "Kilograms";
    } else if (subCategory === "height") {
      unit = "Centimeters";
    }
    return unit;
  };

  getChartTitle = (category, subCategory) => {
    let title;
    title =
      subCategory.charAt(0).toUpperCase() +
      subCategory.slice(1) +
      " of " +
      category;
    return title;
  };

  clearChart = chartNumber => {
    let newCharts = this.state.charts;
    newCharts[chartNumber] = {};
    this.setState({
      charts: newCharts
    });
  };

  changeChartPage = (chartNumber, page) => {
    let newChartInfo = this.state.chartInfo;
    newChartInfo[chartNumber][2] =
      parseInt(newChartInfo[chartNumber][2]) + page;
    // Update chartinfo with new page position
    this.loadChart(...newChartInfo[chartNumber]);
  };
}

const darkTheme = {
  textColor: "#E0E0E3",
  gridColor: "#707073",
  backgroundColor: {
    linearGradient: { x1: 0, y1: 0, x2: 1, y2: 0 },
    stops: [[0, "#2a2a2b"], [1, "#3e3e40"]]
  }
};
const lightTheme = {
  textColor: "#333333",
  gridColor: "#e6e6e6",
  backgroundColor: "#ffffff"
};

export default App;
