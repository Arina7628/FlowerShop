import React, { Component } from 'react'
import CarouselBox from '../Components/CarouselBox';
import { Card, Container,CardDeck,Button } from "react-bootstrap";

export default class Home extends Component {
    render() {
        return (
            <>
                <CarouselBox/>
                <Container>
                    <h2 className="text-center m-4">Products</h2>
                    <CardDeck>
                        <Card>
                            <Card.Img 
                            variant="top"
                            src="https://images.pexels.com/photos/2300713/pexels-photo-2300713.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            />
                                <Card.Body>
                                    <Card.Title>Rose</Card.Title>
                                    <Card.Text>
                                    tyta klassniy text
                                    </Card.Text>
                                    <Button variant="primary">Buy</Button>
                                </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img 
                            variant="top"
                            src="https://images.pexels.com/photos/5425122/pexels-photo-5425122.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            />
                                <Card.Body>
                                    <Card.Title>Ears</Card.Title>
                                    <Card.Text>
                                    tyta klassniy text
                                    </Card.Text>
                                    <Button variant="primary">Buy</Button>
                                </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img 
                            variant="top"
                            src="https://images.pexels.com/photos/3927285/pexels-photo-3927285.jpeg?cs=srgb&dl=pexels-wiljosan-au-3927285.jpg&fm=jpg"
                            />
                                <Card.Body>
                                    <Card.Title>Tulips</Card.Title>
                                    <Card.Text>
                                    tyta klassniy text
                                    </Card.Text>
                                    <Button variant="primary">Buy</Button>
                                </Card.Body>
                        </Card>
                    </CardDeck>
                </Container>
                </>
        )
    }
}