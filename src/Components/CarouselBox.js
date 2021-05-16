import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import flowersImg from '../assets/Rose.jpg'
import dflowersImg from '../assets/Differents.jpg'
import Chatik from '../Pages/Chatik'
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class CarouselBox extends Component {
    render() {
        <Router>
        <Switch>
            <Route exact path="/Chatik" component={Chatik} />
        </Switch>
    </Router>
        return (
            <Carousel>
                <Carousel.Item >
                    <img
                        ClassName="center w-100% "
                        class="img-rounded"
                        src="https://pbs.twimg.com/profile_banners/878416296/1425211148/1500x500" 
                        alt="Flowers"
                    />
                    <Carousel.Caption>
                        <h3> Flowers shop</h3>
                        <p>Buy our flowers only here</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        ClassName="d-block w-100"
                        src="https://pbs.twimg.com/profile_banners/3294490921/1459140028/1500x500"
                        alt="Flowers"
                    />
                    <Carousel.Caption>
                        <h3> Flowers shop</h3>
                        <p>Buy our flowers only here</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            

        )
    }
}
