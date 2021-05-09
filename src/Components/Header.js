import React, { Component } from 'react';
import { FormControl, Nav, Navbar, Container, Form, Button } from 'react-bootstrap';
import logo from './logo.png';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contacts from '../Pages/Contacts';
import Registration from '../Pages/Registration';
import Authorization from '../Pages/Authorization';
import Blog from '../Pages/Blog'

// <Navbar collapseOnSelect> отвечает за переключение OnSelected на false после срабатывания события
export default class Header extends Component {
    render() {
        return (
            <>
      <Navbar collapseOnSelect expand="md" bg="warning" variant="dark"> 
          <Container>
              <Navbar.Brand href="/" bg="dark"> 
                  <img
                  src={logo}
                  height="30"
                  width="30"
                  className="d-inline-block align-top"
                  alt="Logo"
                  /> Flowers shop
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav" >
                  <Nav className="mr-auto">
                      <Nav.Link href="/" >Home</Nav.Link>
                      <Nav.Link href="/about" >About us</Nav.Link>
                      <Nav.Link href="/contacts" >Contacts(feedback form) </Nav.Link>
                      <Greeting isLoggedIn />
                  </Nav>
                  <Form inLine>
                      <FormControl
                      type="text" 
                      placeholder="Search" //то что написано внутри инпута по умолчанию
                      className="mr-sm-2"
                      />
                      <Button variant ="outline-info">Search</Button>
                  </Form>
              </Navbar.Collapse>
              <LogoutButton isLoggedIn />
          </Container>
      </Navbar>

      <Router>
          <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contacts" component={Contacts} />
              <Route exact path="/blog" component={Blog} />
              <Route exact path="/Registration" component={Registration} />
              <Route exact path="/Authorization" component={Authorization} />
          </Switch>
      </Router>
      </>
        );
    }
}

function Greeting()
{
    let token = localStorage.getItem('token');
    if (token != null && token != '')
    {
      return <></>;
    }
    return <><Nav.Link href="/Registration" >Registration</Nav.Link>
            <Nav.Link href="/Authorization" >Authorization</Nav.Link></>
}

function LogoutButton()
{
    let token = localStorage.getItem('token');
    if (token != null && token != '')
    {
      return <Button onClick = {Logout} variant="primary">Logout</Button>;
    }
    return <></>;
}

function Logout()
{
    delete localStorage['token']
    window.location.href = '/';
}