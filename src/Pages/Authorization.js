import React, { Component } from 'react';
import { Form, Button, Nav, Container } from 'react-bootstrap'
import Registration from '../Pages/Registration';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Authorization()
{
    var request = new XMLHttpRequest();
    request.open("POST", "https://localhost:44350/connect/token", true);
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    request.addEventListener("load", function () {
        if (request.status < 400) { // если запрос успешный
            let data = JSON.parse(request.response);
            localStorage.setItem('token', data['access_token'])
            console.log(data['access_token']);
            window.location.href = '/';
        }
        else {
            if (request.responseText.includes('invalid_username_or_password'))
                console.log("Неправильный пароль или логин");
        }
    });
    // отправляем запрос на аутентификацию
    request.send(
        "grant_type=password" +
        "&client_id=quickapp_spa" +
        "&scope=quickapp_api" +
        "&client_secret=not_used" +
        "&username=" + document.getElementById("login").value +
        "&password=" + document.getElementById("password").value);       
}

export default class Contacts extends Component {
    render() {
        return (
            <Container style={{width: '500px'}}>
                <h1> Authorization </h1>
                <Form>

                    <Form.Group controlId="login">
                        <Form.Label>Login</Form.Label>
                        <Form.Control type="Login" placeholder="Enter Login" />
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="Password" placeholder="Enter Password" />
                    </Form.Group>
                    
                    <Button onClick = {Authorization} variant="primary">Enter</Button>
                </Form>
                
                <Nav className="mr-auto">
                <Nav.Link href="/Registration" >To registration</Nav.Link>
                  </Nav>
            </Container>

        )
    }
}

