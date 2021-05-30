import React, { Component } from 'react';
import { Form, Button, Container } from 'react-bootstrap'
import axios from 'axios';
import AuthHelper from '../Helpers/AuthHelper';

const Roles = {
    0: "administrator",
    1: "user",
    2: "manager"
}

export default class Contacts extends Component {
    constructor(props)
    {
        super(props)
        this.state = { isLoaded: false, role: 1}

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({role: event.target.value});
      }

    handleSubmit = async event => {
        event.preventDefault();
        
        let body = {
            userName: document.getElementById("login").value,
            fullName: `${document.getElementById("firstName").value} ${document.getElementById("secondName").value}`,
            email: document.getElementById("email").value,
            phoneNumber: document.getElementById("phoneNumber").value,
            isEnabled: true,
            currentPassword: document.getElementById("password").value,
            newPassword: document.getElementById("password").value,
            roles: [
                Roles[this.state.role]
            ]
          }

        try
        {
            await axios.post(`https://localhost:44350/api/Account/users`, body, { headers: AuthHelper.AuthHeader() })
            window.location.reload();
        }
        catch
        {

        }
      }

    render() {
        if (!AuthHelper.CheckAuth())
        {
            window.location.href = '/';
            return;
        }

        return (
            <Container style={{width: '500px'}}>
                <h1> Добавление нового пользователя </h1>
                <Form>
                    <Form.Group controlId="firstName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" />
                    </Form.Group>

                    <Form.Group controlId="secondName">
                        <Form.Label>Second name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Second name" />
                    </Form.Group>

                    <Form.Group controlId="phoneNumber">
                        <Form.Label>Second name</Form.Label>
                        <Form.Control type="text" placeholder="Enter phone number" />
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

                    <select id={`choice`} name="choice" value={this.state.role} onChange={this.handleChange}>
                        <option value="0">administrator</option>
                        <option value="1">user</option>
                        <option value="2">manager</option>
                    </select><br/>

                    <Button onClick = {this.handleSubmit} variant="primary">Добавить</Button>
                </Form>
            </Container>
        )
    }
}