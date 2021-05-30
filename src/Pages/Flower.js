import React, { Component } from 'react'
import { Card, Container,CardDeck,Button } from "react-bootstrap";
import axios from 'axios';
import AuthHelper from '../Helpers/AuthHelper';
import Spinner from '../Components/Spinner';
import Image from '../Components/Image'

export default class Flower extends Component {
    constructor() {
        super()
        this.state = { isLoaded: false }
      }

    componentDidMount()
    {
        this.renderProduct();
    }

    renderProduct = async() =>
    {
        try {
            const id = this.props.match.params.id;
            const res = await axios.get(`https://localhost:44350/api/Product/${id}`, { headers: AuthHelper.AuthHeader() })
            const product = res.data;
            this.setState({
                isLoaded: true,
                Product: product
            })
        } catch (err) {
          console.log(err);
        }
    }

    render() {
        const { isLoaded, Product } = this.state;

        return(
            
            <>
            {
                !isLoaded ? 
                <Spinner /> :
                <>
                    <div>Вы собираетесь купить данный цветок</div>
                    <CardDeck>
                    <Card>
                        <Card.Body>
                            <Card.Title>{Product.name}</Card.Title>
                            {Image({ src: Product.icon, height: 100, width: 100})}
                            <Card.Text>
                            {Product.buyingPrice} rub/pieces
                            </Card.Text>
                            <div>Укажите количество (доступно {Product.unitsInStock})</div>
                            <input
                                name="quantity"
                                type="number"
                                min = "1"
                                max = {Product.unitsInStock}
                                id = 'quantity'
                            />
                            <div></div>
                            <div><Button variant="primary" onClick={() => AddToCart(Product.id)}>Добавить в корзину</Button></div>
                        </Card.Body>
                    </Card>
                    </CardDeck>
                </>
            }
            </>)
    }
}



async function AddToCart(productId)
{
    try
    {
        await axios.post(`https://localhost:44350/api/ShoppingCart/ChangeProductCount`, {
            "quantity": Number(document.getElementById('quantity').value),
            "productId": productId
          },
          { headers: AuthHelper.AuthHeader() })
    }
    catch (err)
    {
        console.log(err);
    }

    window.location.href = '/cart';
}