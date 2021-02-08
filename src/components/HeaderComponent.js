import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';

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
                            </Nav>
                        </Collapse>
                    <Button className="fa fa-sign-in btn-danger " onClick={this.toggleLog}> Login </Button>
                </div>
        </Navbar>
        <Modal isOpen={this.state.isLogOpen} toggle={this.toggleLog}>
                    <ModalHeader toggle={this.toggleLog}>Login</ModalHeader>
                    <ModalBody>
                    <Form>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input}  />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
       </div>
    );
  }
}
export default Header;