import React, { Component } from 'react'
import { Card, Container, CardDeck, Button } from "react-bootstrap";
import axios from 'axios';
import AuthHelper from '../Helpers/AuthHelper';
import Spinner from '../Components/Spinner';
import Image from '../Components/Image'

export default class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = { isLoaded: false}
      }

    componentDidMount() {
        this.renderCart();
      }

      renderCart = async() => {
        try {
          const res = await axios.get('https://localhost:44350/api/ShoppingCart', { headers: AuthHelper.AuthHeader() })
          const cart = res.data;
          this.setState({
            isLoaded: true,
            OrderDetails: cart.orderDetails
          })

        } catch (err) {
          console.log(err);
        }
      }

    render() {
        
        if (!this.state.isLoaded)
            return (<Spinner />)
        
        const orderDetails = this.state && this.state.OrderDetails;
        let summ = 0;
        const RenderOrderDetails = orderDetails?.map((orderDetail, i) => 
        {
            {summ+= orderDetail.unitPrice * orderDetail.quantity}
            return (
                <>
                    <CardDeck>
                        <Card>
                            
                            <Card.Body>
                                <Card.Title>Наименование продукта: {orderDetail.product.name}</Card.Title>
                                {Image({ src: orderDetail.product.icon, height: 100, width: 100})}
                                <Card.Text>
                                Количество: {orderDetail.quantity}, цена за штуку: {orderDetail.unitPrice}, общая сумма: {orderDetail.unitPrice * orderDetail.quantity}
                                </Card.Text>
                                <div>Изменить количество (доступно {orderDetail.product.unitsInStock})</div>
                                <input
                                    name="quantity"
                                    type="number"
                                    min = "1"
                                    max = {orderDetail.product.unitsInStock}
                                    id = 'quantity'
                                />
                                <div><Button onClick={() => ChangeCount(orderDetail.product)}>Обновить количество</Button></div>
                                <div><Button onClick={() => DeleteItem(orderDetail.product)}>Убрать из корзины</Button></div>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </>
              );
        })

        const IsOrderDetailEmpty = orderDetails.length == 0;
        console.log(orderDetails.length == 0)
        return (
            <div>
                <div><a href='/History'>История заказов</a></div>
                {IsOrderDetailEmpty ? <div>Корзина пуста!</div>: <div>Вы собираетесь купить следующие продукты:</div>}
                {RenderOrderDetails}
                {IsOrderDetailEmpty ? (<></>) : <div>Полная стоимость корзины: {summ}</div>}
                {IsOrderDetailEmpty ? (<></>) : (<div><Button onClick={BuyItems}>Buy items</Button></div>)}
            </div>
        )
    }
}

async function BuyItems()
{
    try
    {
        await axios.put('https://localhost:44350/api/ShoppingCart/ConfirmedOrder', null, { headers: AuthHelper.AuthHeader() })
    } catch (err)
    {
        console.log(err);
    }

    window.location.reload();
}

async function DeleteItem(product)
{
    try
    {
        await axios.post(`https://localhost:44350/api/ShoppingCart/ChangeProductCount`, {
            "quantity": 0,
            "productId": product.id
          },
          { headers: AuthHelper.AuthHeader() })
    }
    catch (err)
    {
        console.log(err);
    }

    window.location.reload();
}

async function ChangeCount(product)
{
    try
    {
        await axios.post(`https://localhost:44350/api/ShoppingCart/ChangeProductCount`, {
            "quantity": Number(document.getElementById('quantity').value),
            "productId": product.id
          },
          { headers: AuthHelper.AuthHeader() })
    }
    catch (err)
    {
        console.log(err);
    }

    window.location.reload();
}