import React, { Component } from 'react'
import { FormControl, Nav, Navbar, Container, Form, Button, Tab } from 'react-bootstrap';

function test()
{
    var request = new XMLHttpRequest();
    request.open("POST", "https://localhost:44350/connect/token", true);
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    console.log('PIDORAS');
    console.log(document.getElementById("login").value);
    console.log(document.getElementById("password").value)
    request.addEventListener("load", function () {
        if (request.status < 400) { // если запрос успешный
            let data = JSON.parse(request.response);
            localStorage.setItem('myToken', data['access_token'])
            console.log(data['access_token']);
        }
        else {
            console.log("Status", request.status);
            console.log(request.responseText);
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

export default class About extends Component {
    render() {
        return (
            <Container>
                <Form inLine>
                    <input id = 'login' placeholder="Login" type="text" class="mr-sm-2 form-control"/>
                    <input id = 'password' placeholder="Password" type="text" class="mr-sm-2 form-control"/>
                    <Button id = 'knopka' onClick = {test} variant ="outline-info">Login</Button>
                </Form>
            </Container>
        )
    }
}