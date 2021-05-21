import React, { Component } from 'react'
import CarouselBox from '../Components/CarouselBox';
import { Card, Container,CardDeck,Button } from "react-bootstrap";
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from 'axios';
import Flower from '../Pages/Flower'
import Image from '../Components/Image'
import AuthHelper from '../Helpers/AuthHelper';

export default class Home extends Component {

    componentDidMount() {
        this.renderFlowers();
      }

      renderFlowers = async() => {
        try {
          const res = await axios.get('https://localhost:44350/api/Product')
          const flowers = res.data;
          this.setState({
            Flowers: flowers
          })

        } catch (err) {
          console.log(err);
        }
      }

    render() {
        const flowers = this.state && this.state.Flowers?.map((flower, i) => (
            <>
                <CardDeck>
                    <Card>
                            {Image({ src: flower.icon, height: 500, width: 500})}
                            <Card.Body>
                                <Card.Title>{flower.name}</Card.Title>
                                <Card.Text>
                                {flower.buyingPrice} rub/pieces
                                </Card.Text>
                                {AuthHelper.CheckAuth() ? <Button variant="primary" onClick={() => GoToBuy(flower)}>Buy</Button> : <></>}
                        </Card.Body>
                    </Card>
                </CardDeck>
            </>
          ));

        return (
            <>
                <CarouselBox/>
                <Container>
                    <h2 className="text-center m-4">Products</h2>
                    {flowers}
                </Container>

                <Router>
                  <Switch>
                    <Route path="/flower/:id(\d+)" component={Flower} />
                  </Switch>
                </Router>
                </>  
        )
    }
}

function GoToBuy(flower)
{
  window.location.href = `/flower/${flower.id}`;
}