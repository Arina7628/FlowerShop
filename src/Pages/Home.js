import React, { Component } from 'react'
import CarouselBox from '../Components/CarouselBox';
import { Card, Container,CardDeck,Button } from "react-bootstrap";
import Chatik from '../Pages/Chatik'

import {Typography} from '@material-ui/core';

import axios from 'axios';


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
                        <Card.Img 
                        variant="top"
                        src={`data:image/png;base64,${flower.icon}`}
                        />
                            <Card.Body>
                                <Card.Title>{flower.name}</Card.Title>
                                <Card.Text>
                                {flower.buyingPrice} rub/pieces
                                </Card.Text>
                                <Button variant="primary">Buy</Button>
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

                    <CardDeck>
                        <Card>
                            <Card.Img 
                            variant="top"
                            src="https://images.pexels.com/photos/2300713/pexels-photo-2300713.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            />
                                <Card.Body>
                                    <Card.Title>Red rose</Card.Title>
                                    <Card.Text>
                                    60 rub/pieces
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
                                    30 rub/pieces
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
                                    70 rub/pieces
                                    </Card.Text>
                                    <Button variant="primary">Buy</Button>
                                </Card.Body>
                        </Card>
                    </CardDeck>
                    <h2 className="text-center m-4">Bouquet</h2>
                    <CardDeck>
                        <Card>
                            <Card.Img 
                            variant="top"
                            src="https://kislovodsk.lux-buket.ru/wa-data/public/shop/products/89/02/289/images/309/lb-282-ec621844ad5a457ab0a43459f4dcca07.jpg.750x0.jpg"
                            />
                                <Card.Body>
                                    <Card.Title>Bouquet different tulips</Card.Title>
                                    <Card.Text>
                                    2500 rub
                                    </Card.Text>
                                    <Button variant="primary">Buy</Button>
                                </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img 
                            variant="top"
                            src="https://mandarin-shop.ru/images/cms/thumbs/56f083edb9935936d67d0c3b24a75a37db7c291a/fd84f07064fe2eec7c94e01ae4058378_auto_auto_jpg_5_70.jpg"
                            />
                                <Card.Body>
                                    <Card.Title>Bouquet different roses</Card.Title>
                                    <Card.Text>
                                    2500 rub
                                    </Card.Text>
                                    <Button variant="primary">Buy</Button>
                                </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img 
                            variant="top"
                            src="https://bukettrade.ru/uploads/product/300/335/thumbs/70_pcjksddRxhQ.jpg"
                            />
                                <Card.Body>
                                    <Card.Title>Pink roses in box</Card.Title>
                                    <Card.Text>
                                    2000 rub 
                                    </Card.Text>
                                    <Button variant="primary">Buy</Button>
                                </Card.Body>
                        </Card>
                    </CardDeck>
            <footer bg="blue">
            <Typography variant="h6" align="center" gutterBottom> FlowerShop </Typography>
            <Typography variant="h6" align="center" gutterBottom> © All right reserved </Typography>
            </footer>
                    {flowers}
                </Container>
                </>
        )
    }
}