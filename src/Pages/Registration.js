import React, { Component } from 'react';
import { Form, Button, Container } from 'react-bootstrap'
import axios from 'axios';
import CheckAuth from '../Helpers/AuthHelper';

export default class Contacts extends Component {
    handleSubmit = event => {
        event.preventDefault();
    
        axios.post(`https://localhost:44350/api/Registration/users`, 
        { 
            email: document.getElementById("email").value,
            userName: document.getElementById("login").value,
            fullName: `${document.getElementById("firstName").value} ${document.getElementById("secondName").value}`,
            newPassword: document.getElementById("password").value,
        })
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
      }

    render() {
        if (CheckAuth.CheckAuth()){
            window.location.href = '/';
            return;
        }
        else
        return (
            <Container style={{width: '500px'}}>
                <h1> Registration </h1>
                <Form>
                    <Form.Group controlId="firstName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="Name" placeholder="Enter Name" />
                    </Form.Group>

                    <Form.Group controlId="secondName">
                        <Form.Label>Second name</Form.Label>
                        <Form.Control type="Second name" placeholder="Enter Second name" />
                    </Form.Group>

                    <Form.Group controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="login">
                        <Form.Label>Login</Form.Label>
                        <Form.Control type="Login" placeholder="Enter Login" />
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="Password" placeholder="Enter Password" />
                    </Form.Group>

                    <Form.Group controlId="passwordRepeat">
                        <Form.Label>Repeat password</Form.Label>
                        <Form.Control type="Password2" placeholder="Repeat password" />
                    </Form.Group>
                
                    <Button onClick = {this.handleSubmit} variant="primary">Сomplete registration</Button>
                </Form>
            </Container>
        )
    }
}