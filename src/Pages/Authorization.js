import React, { Component } from 'react';
import { Form, Button, Nav, Container } from 'react-bootstrap'
import Registration from '../Pages/Registration';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class Contacts extends Component {
    render() {
        return (
            <Container style={{width: '500px'}}>
                <h1> Authorization </h1>
                <Form>

                    <Form.Group controlId="formBasicLogin">
                        <Form.Label>Login</Form.Label>
                        <Form.Control type="Login" placeholder="Enter Login" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="Password" placeholder="Enter Password" />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">Enter</Button>
                </Form>
                
                <Nav className="mr-auto">
                <Nav.Link href="/Registration" >To registration</Nav.Link>
                  </Nav>
            </Container>

        )
    }
}