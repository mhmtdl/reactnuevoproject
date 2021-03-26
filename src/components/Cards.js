import React, { Component } from "react";
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";

export default class Cards extends Component {
  render() {
    return (
      <div>
        {this.props.personelInformations.map((p) => (
          <Card key={p.id} className='mt-5 '>
            <CardBody>
              <CardTitle tag="h5">{p.name}</CardTitle>
             <CardSubtitle tag="h6" className="mb-2 text-muted">
                {p.company}
              </CardSubtitle>
              <CardText>{p.jobdescription}</CardText>
            </CardBody>
          </Card>
        ))}
      </div>
    );
  }
}