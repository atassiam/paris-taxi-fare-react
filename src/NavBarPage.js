import React, { Component } from "react";
import {MDBNavbar, MDBNavbarBrand} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';

function NavBarPage(){
    return  <Router>
                <MDBNavbar color="indigo" dark expand="md">
                <MDBNavbarBrand>
                    <strong className="white-text">Paris Taxis Fare</strong>
                </MDBNavbarBrand>
                </MDBNavbar>
            </Router>
}
export default NavBarPage;