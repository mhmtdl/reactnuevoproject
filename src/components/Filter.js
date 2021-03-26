import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";

export default class Filter extends Component {
  state = {
    jobTitle: "",
    area: "",
  };

  handleInputChange = (event) => {
    this.setState({ jobTitle: event.target.value });
  };

  handleSelectChange = (event) => {
    this.setState({ area: event.target.value });
  };

  handleInputClick = () => {
    let jobTitle = this.state.jobTitle;
    let area = this.state.area;

    this.props.getPersonelInformation("", "", area, jobTitle, true);
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col xs="6">
              <input
                placeholder="Job Title"
                className="form-control"
                onChange={this.handleInputChange}
              ></input>
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs="6">
              <select
                className="form-control"
                onChange={this.handleSelectChange}
              >
                <option key="Seciniz">Seciniz</option>
                {this.props.areas.map((p) => (
                  <option key={p.id} value={p.area}>
                    {p.area}
                  </option>
                ))}
              </select>
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs="5">
              <button
                className="btn btn-primary"
                onClick={this.handleInputClick}
              >
                Filter
              </button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}