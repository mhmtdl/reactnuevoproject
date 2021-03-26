import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";

export default class Search extends Component {
  state = {
    input: "",
    company: ""
  };

  handleInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  handleSelectChange = (event) => {
      this.setState({ company: event.target.value });
  }

  handleInputClick = (event) => {
    let name = this.state.input;
    let company = this.state.company;

    this.props.getPersonelInformation(name, company, "", "", true);
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col xs="5">
              <input
                placeholder="Name"
                className="form-control"
                onChange={ this.handleInputChange }
              ></input>
            </Col>
            <Col xs="5">
              <select className="form-control" onChange={this.handleSelectChange}>
                <option key=''>Seciniz</option>
                {this.props.companies.map((p) => (
                  <option key={p.id} value={p.company}>{p.company}</option>
                ))}
              </select>
            </Col>
            <button className="btn btn-success" onClick={this.handleInputClick}>
              Search
            </button>
          </Row>
        </Container>
      </div>
    );
  }
}