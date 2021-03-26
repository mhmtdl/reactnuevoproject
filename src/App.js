import React, { Component } from "react";
import { Container, Col, Row } from "reactstrap";
import Search from "./components/Search";
import Navi from "./components/Navi";
import Cards from "./components/Cards";
import Filter from "./components/Filter";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      personelInformations: [],
      companies: [],
      isMakeSearch: false,
      areas: [],
    };

    this.getPersonelInformation = this.getPersonelInformation.bind(this);
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getPersonelInformation();
    this.getData();
  }

  getPersonelInformation(
    name = "",
    company = "",
    area = "",
    jobTitle = "",
    IsMakeSeach = false
  ) {
    let url = " https://5f7335deb63868001615f557.mockapi.io/list";

    if (name != "" && name != undefined) {
      url += "?name=" + name;
    }

    if (company != "" && company != "Seciniz" && name != undefined) {
      url += "?company=" + company;
    }

    if (area != "" && area != "Seciniz" && area != undefined) {
      url += "?area=" + area;
    }

    if (jobTitle != "" && name != undefined) {
      url += "?jobdescription=" + jobTitle;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) =>
        this.setState({ personelInformations: data, isMakeSearch: IsMakeSeach })
      );
  }

  getData() {
    let url = " https://5f7335deb63868001615f557.mockapi.io/list";

    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ companies: data, areas: data }));
  }

  render() {
    return (
      <div>
        <Container>
          <Navi />
          <br />
          <Row>
            <Col xs="4"></Col>
            <Col xs="8">
              <Search
                getPersonelInformation={this.getPersonelInformation}
                companies={this.state.companies}
              ></Search>
            </Col>
            <br />
            <br />
            <br />
          </Row>
          {this.state.isMakeSearch ? (
            <Row>
              <Col xs="6">
                <Filter
                  areas={this.state.areas}
                  getPersonelInformation={this.getPersonelInformation}
                />
              </Col>
              <Col xs="4">
                <Cards personelInformations={this.state.personelInformations} />
              </Col>
            </Row>
          ) : (
            <div></div>
          )}
        </Container>
      </div>
    );
  }
}