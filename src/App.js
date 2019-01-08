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
      charts: [{}, {}, {}, {}]
    };
    // Charts to be loaded as default
    this.loadChartData("starships", "crew", "1", 0, 220);
    this.loadChartData("people", "height", "2", 3, 220);
  }

  handleLightSwitch = () => {
    console.log("handled switch", this.state.charts);

    let newCharts = [{}, {}, {}, {}];
    this.setState(
      {
        isLightSwitched: !this.state.isLightSwitched
      },
      // Wait for light switch status update before updating chart with new theme.
      () => {
        for (let i = 0; i < 4; i++) {
          if (this.state.charts[i].title) {
            newCharts[i] = this.createGraphBody(i);
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
            loadChartData={this.loadChartData.bind(this)}
            clearChart={this.clearChart.bind(this)}
            charts={this.state.charts}
          />
        </div>
      </React.Fragment>
    );
  }

  createGraphBody = (chartNumber, data, category, subCategory) => {
    let theme = this.getCurrentTheme();
    let units;
    // This section deals with keeping old values where relevant while updating theme (WIP).
    let text = category
      ? this.getChartTitle(category, subCategory)
      : this.state.charts[chartNumber].title.text;
    if (!this.state.charts[chartNumber].yAxis) {
      units = this.getUnitofMeasurement(subCategory);
    } else {
      units = this.state.charts[chartNumber].yAxis.title.text;
    }

    let chartTemplate = {
      title: {
        text: text,
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

  clearChart = chartNumber => {
    let newCharts = this.state.charts;
    newCharts[chartNumber] = {};
    this.setState({
      charts: newCharts
    });
  };

  loadChartData = (category, subCategory, page, chartNumber, filter) => {
    let charts = this.state.charts;
    fetch("https://swapi.co/api/" + category + "/?page=" + page)
      .then(res => res.json())
      .then(
        result => {
          charts[chartNumber] = this.createGraphBody(
            chartNumber,
            this.createChartData(result.results, subCategory, filter),
            this.getChartTitle(category, subCategory),
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
    if (this.state.charts[0].title) {
      console.log("Old title", this.state.charts[0].title.text);
    }
    return title;
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
