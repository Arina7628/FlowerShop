import React, { Component } from 'react'
import CarouselBox from '../Components/CarouselBox';
import { Card, Container,CardDeck,Button } from "react-bootstrap";
import axios from 'axios';
<<<<<<< HEAD
import '../index.css';
=======
>>>>>>> main

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
<<<<<<< HEAD

=======
                <CardDeck>
                    <Card>
>>>>>>> main
                        <Card.Img 
                        variant="top"
                        src={`data:image/png;base64,${flower.icon}`}
                        />
<<<<<<< HEAD
  {flower.name}
                                {flower.buyingPrice} rub/pieces
                                <Button variant="primary">Buy</Button>
=======
                            <Card.Body>
                                <Card.Title>{flower.name}</Card.Title>
                                <Card.Text>
                                {flower.buyingPrice} rub/pieces
                                </Card.Text>
                                <Button variant="primary">Buy</Button>
                        </Card.Body>
                    </Card>
                </CardDeck>
>>>>>>> main
            </>
          ));

        return (
            <>
                <CarouselBox/>
                <Container>
                    <h2 className="text-center m-4">Products</h2>
                    {flowers}
                </Container>
                </>
        )
    }
}