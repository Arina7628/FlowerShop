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
import Image from '../Components/Image'
import cartIcon from '../assets/shopping-cart-icon.png'
import Cart from '../Pages/Cart'
import Flower from '../Pages/Flower'
import '../css/textOnImage.css'
import axios from 'axios';
import AuthHelper from '../Helpers/AuthHelper';
import HistoryCheckout from '../Pages/History'
import MyAccount from '../Pages/MyAccount'

export default class Header extends Component {
    componentDidMount() {
        this.renderCart();
      }

      renderCart = async() => {
        try {
          const res = await axios.get('https://localhost:44350/api/ShoppingCart', { headers: AuthHelper.AuthHeader() })
          const cart = res.data;
          this.setState({
            ProductCount: cart.orderDetails.length
          })

        } catch (err) {
          console.log(err);
        }
      }

    render() {
        const productCount = this.state && this.state.ProductCount;

        return (
            <>
      <Navbar collapseOnSelect expand="md" bg="warning" variant="dark"> 
          <Container>
              <Navbar.Brand href="/" bg="dark">
                {Image({ src: logo, height: 30, width: 30, className: "d-inline-block align-top", alt: 'Logo'})}
                Flowers shop
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav" >
                <Nav className="mr-auto">
                    <Nav.Link href="/" >Home</Nav.Link>
                    <Nav.Link href="/about" >About us</Nav.Link>
                    <Nav.Link href="/contacts" >Contacts(feedback form) </Nav.Link>
                    {!AuthHelper.CheckAuth() ? 
                        <><Nav.Link href="/Registration" >Registration</Nav.Link>
                        <Nav.Link href="/Authorization" >Authorization</Nav.Link></> :
                        <></>}
                </Nav>
                {AuthHelper.CheckAuth() ?
                    <>
                    <figure className='position-relative'>
                    <a href='/Cart'>{Image({ src: cartIcon, height: 60, width: 60, className: "d-inline-block align-top", alt: 'Cart'})}</a>
                    <figcaption>
                        {productCount == 0 ? '' : productCount}
                    </figcaption>
                    </figure>
                    </> : <></>}
              </Navbar.Collapse>
              {AuthHelper.CheckAuth() ?
                <Button onClick = {Logout} variant="primary">Logout</Button> : <></>}

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
              <Route exact path="/Cart" component={Cart} />
              <Route exact path="/flower/:id(\d+)" component={Flower} />
              <Route exact path="/History" component={HistoryCheckout}/>
              <Route exact path="/Account" component={MyAccount}/>
          </Switch>
      </Router>
      </>
        );
    }
}

function Logout()
{
    delete localStorage['token']
    window.location.href = '/';
}