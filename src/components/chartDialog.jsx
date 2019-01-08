import React, { Component } from "react";
import Modal from "react-bootstrap/lib/Modal";
import Button from "react-bootstrap/lib/Button";
import Form from "react-bootstrap/lib/Form";

class ChartDialog extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.categories = ["starships", "vehicles", "people"];
    this.state = {
      show: this.props.show,
      validated: false,
      subCategories: ["crew", "passengers", "length"],
      selectedCategory: "starships",
      selectedSubCategory: "crew",
      selectedPage: "1",
      selectedFilter: 220
    };
  }

  handleClose() {
    this.setState({
      show: false
    });
  }

  handleShow() {
    this.setState({
      show: true
    });
  }

  handleCategoryChange = event => {
    let category = event.target.value;
    let newSubCategories;
    if (category === "starships" || category === "vehicles") {
      newSubCategories = ["crew", "length", "passengers"];
    } else {
      newSubCategories = ["height", "mass"];
    }
    this.setState({
      selectedCategory: category,
      selectedSubCategory: newSubCategories[0],
      subCategories: newSubCategories
    });
  };

  handleSubCategoryChange = event => {
    this.setState({ selectedSubCategory: event.target.value });
  };

  handlePageChange = event => {
    this.setState({ selectedPage: event.target.value });
  };

  handleFilterChange = event => {
    this.setState({ selectedFilter: event.target.value });
  };

  handleSubmit(event) {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      this.setState({ validated: true });
    } else {
      event.preventDefault();
      event.stopPropagation();
      this.setState({ show: false });
      this.props.loadChartData(
        this.state.selectedCategory,
        this.state.selectedSubCategory,
        this.state.selectedPage,
        this.props.chartNumber,
        this.state.selectedFilter
      );
    }
  }

  render() {
    const { validated } = this.state;
    let categories = this.categories.map((category, index) => (
      <option key={index} index={index} value={category}>
        {category}
      </option>
    ));
    let subCategories = this.state.subCategories.map((category, index) => (
      <option key={index} value={category}>
        {category}
      </option>
    ));
    return (
      <div>
        <Button
          variant="secondary"
          onClick={this.handleShow}
          className="add-chart"
        >
          Add chart
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add chart</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form
              noValidate
              validated={validated}
              onSubmit={e => this.handleSubmit(e)}
            >
              <Form.Row>
                <Form.Group>
                  <Form.Label>Category</Form.Label>
                  <Form.Control
                    onChange={this.handleCategoryChange}
                    as="select"
                  >
                    {categories}
                  </Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Property</Form.Label>
                  <Form.Control
                    onChange={this.handleSubCategoryChange}
                    as="select"
                  >
                    {subCategories}
                  </Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Page</Form.Label>
                  <Form.Control onChange={this.handlePageChange} as="select">
                    <option key="1" value="1">
                      1
                    </option>
                    <option key="2" value="2">
                      2
                    </option>
                    <option key="3" value="3">
                      3
                    </option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group>
                  <Form.Label>Filter maximum value</Form.Label>
                  <Form.Control
                    type="number"
                    min="10"
                    step="5"
                    value={this.state.selectedFilter}
                    onChange={this.handleFilterChange}
                    required
                  />
                </Form.Group>
              </Form.Row>
              <Modal.Footer>
                <Button type="submit">Create</Button>
                <Button variant="secondary" onClick={this.handleClose}>
                  Cancel
                </Button>
              </Modal.Footer>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default ChartDialog;