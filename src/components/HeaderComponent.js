import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
const required = (val) => val && val.length;

class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false,
          isLogOpen: false
        };
        this.toggleLog = this.toggleLog.bind(this);
        this.toggleNav = this.toggleNav.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        // event.preventDefault();
    }

      toggleLog() {
        this.setState({
        isLogOpen: !this.state.isLogOpen
        });
    }

        toggleNav() {
            this.setState({
              isNavOpen: !this.state.isNavOpen
            });
      }
  render() {
    return(
        <div>
            <Navbar dark expand="md">
                <div className="container">
                    <NavbarToggler onClick={this.toggleNav} />
                    <NavbarBrand className="mr-auto" href="/"><img src='../imgs/logo.jpg' height="30" width="31" alt='MBase' />  MoviesBase</NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/allmovies'><span className="fa fa-film fa-lg"></span> Movies</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/contact'><span className="fa fa-address-card fa-lg"></span> Contact </NavLink>
                            </NavItem>
                            </Nav>
                        </Collapse>
                    <Button className="fa fa-sign-in btn-danger " onClick={this.toggleLog}> Login </Button>
                </div>
        </Navbar>
        <Modal isOpen={this.state.isLogOpen} toggle={this.toggleLog}>
                    <ModalHeader toggle={this.toggleLog}>Login</ModalHeader>
                    <ModalBody>
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                        <Row className="form-group">
                                    <Label htmlFor="email" md={2}>Email</Label>
                                    <Col md={10}>
                                        <Control.text model=".email" id="email" name="email"
                                            placeholder="Email"
                                            className="form-control"
                                            validators={{
                                                required, validEmail
                                            }}
                                            />
                                        <Errors
                                            className="text-danger"
                                            model=".email"
                                            show="touched"
                                            messages={{
                                                required: 'Required',
                                                validEmail: 'Invalid Email Address'
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="password" md={2}>Password</Label>
                                    <Col md={10}>
                                        <Control.text model=".password" id="password" name="password"
                                            placeholder="Password"
                                            className="form-control"
                                            />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col md={{size: 6, offset: 2}}>
                                        <div className="form-check">
                                            <Label check>
                                                <Control.checkbox model=".agree" name="agree"
                                                    className="form-check-input"
                                                    /> {' '}
                                                    <strong>Remember me</strong>
                                            </Label>
                                        </div>
                                    </Col>
                                </Row>
                            <Button type="submit" value="submit" color="primary">Submit</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
       </div>
    );
  }
}
export default Header;