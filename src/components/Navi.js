import React from "react";
import {
  Navbar,
  NavbarBrand,
} from "reactstrap";

export default class Navi extends React.Component {

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Nuevo Project</NavbarBrand>
        </Navbar>
      </div>
    );
  }
}
