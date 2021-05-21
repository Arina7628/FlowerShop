import React, { Component } from 'react'
import { Card, Container,CardDeck,Button } from "react-bootstrap";
import axios from 'axios';
import AuthHelper from '../Helpers/AuthHelper';
import Spinner from '../Components/Spinner';
import Image from '../Components/Image'

const OrderStatus = {
    0: "InProcess",
    1: "Confirmed",
    2: "PaidUp",
    3: "Sent",
    4: "Delivered",
    5: "Canceled"
}

export default class Blog extends Component {
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
            const res = await axios.get(`https://localhost:44350/api/ShoppingCart/OrderHistory`, { headers: AuthHelper.AuthHeader() })
            const ordersHistory = res.data;
            console.log(ordersHistory)
            this.setState({
                isLoaded: true,
                OrdersHistory: ordersHistory
            })
        } catch (err) {
          console.log(err);
        }
    }

    render() {
        if (!this.state.isLoaded)
            return <Spinner/>

        const ordersHistory = this.state.OrdersHistory?.map((orderHistory, i) => 
        {
            let summa = 0;

            if (orderHistory.orderDetails.length == 0)
                return (<></>)

            return (
                <>
                    <div>Заказ номер: {orderHistory.id}</div>
                    <div>Статус: {OrderStatus[orderHistory.status]}</div>
                    <div>Детали заказа:</div>
                    <ul>
                        {orderHistory.orderDetails?.map((orderDetail, i) => {
                            {summa+= orderDetail.unitPrice * orderDetail.quantity}
                            return (
                                <>
                                <div>Продукт номер: {i+1}</div>
                                <li><div>Название продукта: {orderDetail.product.name}</div></li>
                                <li><div>{Image({ src: orderDetail.product.icon, height: 100, width: 100})}</div></li>
                                <li><div>Цена за штуку: {orderDetail.unitPrice}</div></li>
                                <li><div>Количество: {orderDetail.quantity}</div></li>
                                <div>Конец продукта</div>
                                </>)
                        })}
                    </ul>
                    <div>Общая сумма заказа: {summa}</div>
                </>
                );
        })

        return (
            <div>
                {ordersHistory}
            </div>
        )
    }
}