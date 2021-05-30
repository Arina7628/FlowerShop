import React, { Component } from 'react'
import axios from 'axios';
import { Card, Form, Container, CardDeck, Button } from "react-bootstrap";
import AuthHelper from '../Helpers/AuthHelper';
import Spinner from '../Components/Spinner';

export default class Myaccount extends Component {
    constructor(props) {
        super(props)
        this.state = { isLoaded: false, name: '', email: '', city: '', address: '', phoneNumber: ''}

        this.nameChange = this.nameChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.cityChange = this.cityChange.bind(this);
        this.addressChange = this.addressChange.bind(this);
        this.phoneChange = this.phoneChange.bind(this);
      }

    componentDidMount() {
        this.renderCart();
      }

    nameChange(event)
    {
        this.setState({name: event.target.value});
    }

    emailChange(event)
    {
        this.setState({email: event.target.value});
    }

    cityChange(event)
    {
        this.setState({city: event.target.value});
    }

    addressChange(event)
    {
        this.setState({address: event.target.value});
    }

    phoneChange(event)
    {
        this.setState({phoneNumber: event.target.value});
    }

      renderCart = async() => {
        try {
          const res = await axios.get('https://localhost:44350/api/ShoppingCart', { headers: AuthHelper.AuthHeader() })
          const account = res.data;
          this.setState({
            isLoaded: true,
            name: account.customer.name,
            email: account.customer.email,
            city: account.customer.city,
            address: account.customer.address,
            phoneNumber: account.customer.phoneNumber
          })

        } catch (err) {
          console.log(err);
        }
      }

    render() {
        
        if (!this.state.isLoaded)
            return (<Spinner />)
        
        return (
            <div>
                <div>Мои данные</div>
                <div>Имя: {this.state.name}</div>
                <div>Email: {this.state.email}</div>
                <div>Адрес доставки: {this.state.address ?? "отсутствует"}</div>
                <div>Родной город: {this.state.city ?? "отсутствует"}</div>
                <div>Телефон: {this.state.phoneNumber ?? "отсутствует"}</div>
                <div>-------------------------------------------------------------------</div>
                <div>-------------------------------------------------------------------</div>
                <div>----------------------Изменение данных----------------------</div>
                <div>-------------------------------------------------------------------</div>
                    <Form>
                        <Form.Group controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" value={this.state.name} onChange={this.nameChange}/>
                        </Form.Group>

                        <Form.Group controlId="email">
                            <Form.Label>email</Form.Label>
                            <Form.Control type="text" placeholder="Enter email" value={this.state.email} onChange={this.emailChange}/>
                        </Form.Group>

                        <Form.Group controlId="address">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" placeholder="Enter address" value={this.state.address} onChange={this.addressChange}/>
                        </Form.Group>

                        <Form.Group controlId="city">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" placeholder="Enter city" value={this.state.city} onChange={this.cityChange}/>
                        </Form.Group>

                        <Form.Group controlId="phoneNumber">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="text" placeholder="Enter phone number" value={this.state.phoneNumber} onChange={this.phoneChange}/>
                        </Form.Group>

                        <Button variant="primary" onClick={() => SaveChanges(this.state.name, this.state.email, 
                            this.state.address, this.state.city, this.state.phoneNumber)}>Подтвердить изменения</Button>
                    </Form>
            </div>
        )
    }
}

async function SaveChanges(name, email, address, city, phoneNumber)
{
    let body = 
    {
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        address: address,
        city: city
      }

    try
    {
        await axios.put(`https://localhost:44350/api/ShoppingCart/MyInfo`, body, { headers: AuthHelper.AuthHeader() })
    }
    catch
    {
    }

    window.location.reload();
}