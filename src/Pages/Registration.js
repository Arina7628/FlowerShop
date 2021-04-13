import React, { Component } from 'react';
import { Form, Button, Container } from 'react-bootstrap'

export default class Contacts extends Component {
    render() {
        return (
            <Container style={{width: '500px'}}>
                <h1> Registration </h1>
                <Form>
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="Name" placeholder="Enter Name" />
                    </Form.Group>

                    <Form.Group controlId="formBasicSecondname">
                        <Form.Label>Second name</Form.Label>
                        <Form.Control type="Second name" placeholder="Enter Second name" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicLogin">
                        <Form.Label>Login</Form.Label>
                        <Form.Control type="Login" placeholder="Enter Login" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="Password" placeholder="Enter Password" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword2">
                        <Form.Label>Repeat password</Form.Label>
                        <Form.Control type="Password2" placeholder="Repeat password" />
                    </Form.Group>
                
                    <Button variant="primary" type="submit">Сomplete registration</Button>
                </Form>
            </Container>
        )
    }
}