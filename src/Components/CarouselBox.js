import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'

export default class CarouselBox extends Component {
    render() {
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