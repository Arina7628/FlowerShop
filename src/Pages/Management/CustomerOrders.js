import React, { Component } from 'react'
import { Card, Container, CardDeck, Button } from "react-bootstrap";
import axios from 'axios';
import AuthHelper from '../../Helpers/AuthHelper';
import Spinner from '../../Components/Spinner';
import Image from '../../Components/Image'


const OrderStatus = {
    0: "InProcess",
    1: "Confirmed",
    2: "PaidUp",
    3: "Sent",
    4: "Delivered",
    5: "Canceled"
}

export default class Cart extends Component {
    constructor(props)
    {
        super(props)
        this.state = { isLoaded: false, Forbidden : false, Orders: [], Info: null, optionValue: ''}

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount()
    {
        this.renderClients();
    }

    handleChange(event) {
        this.setState({optionValue: event.target.value});
      }

    renderClients = async() =>
    {
        try
        {
            const id = this.props.match.params.id;
            const res = await axios.get(`https://localhost:44350/api/Customer/${id}`, { headers: AuthHelper.AuthHeader() })

            const orders = res.data['orders'];
            console.log(orders);
            this.setState({
                isLoaded: true,
                Orders: orders,
                Info: res.data
            })
        } catch (err)
        {
            this.setState({
                isLoaded: true,
                Forbidden: true
            })
            console.log(err);
        }
    }

    render()
    {
        if (!this.state.isLoaded)
            return (<Spinner />)
        
        if (this.state.Forbidden)
        {
            window.location.href = '/';
            return <></>
        }
        
        const orders = this.state && this.state.Orders;

        function RenderOrderDetails(orderDetails)
        {
            
            let orderDetila = orderDetails?.map((orderDetail, i) => 
            {
                return (<>
                <Card.Text>Наименование продукта: {orderDetail.product.name}</Card.Text>
                {Image({ src: orderDetail.product.icon, height: 100, width: 100})}
                <Card.Text>
                Количество: {orderDetail.quantity}, цена за штуку: {orderDetail.unitPrice}, общая сумма: {orderDetail.unitPrice * orderDetail.quantity}
                </Card.Text>
                </>)
            })
            
            return orderDetila
        }

        const RenderOrder = orders?.map((order, i) => 
        {
            return (
                <>
                    {order.orderDetails.length == 0 ? <></> : 
                    <CardDeck>
                        <Card>
                            <Card.Body>
                                <Card.Title>Заказ номер: {order.id}</Card.Title>
                                <Card>
                                    {RenderOrderDetails(order.orderDetails)}
                                    <Card.Text>Статус заказа: {OrderStatus[order.status]}</Card.Text>
                                    <div>Что вы хотите сделать с заказом?</div>
                                    <select id={`choice${order.id}`} name="choice" value={this.state.optionValue} onChange={this.handleChange}>
                                        <option value="0">InProcess</option>
                                        <option value="1">Confirmed</option>
                                        <option value="2">PaidUp</option>
                                        <option value="3">Sent</option>
                                        <option value="4">Delivered</option>
                                        <option value="5">Canceled</option>
                                    </select>
                                    <Button variant="primary" type="submit" onClick={() => ChangeStatus(order.id, document.getElementById(`choice${order.id}`).value)}>Установить статус заказа</Button>
                                </Card>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                    }
                </>
              );
        })

        return (
            <>
            <div>Имя клиента: {this.state.Info.name}</div>
            {RenderOrder}
            </>
        )
    }
}

async function ChangeStatus(orderId, status)
{
    try
    {
        await axios.put(`https://localhost:44350/api/Customer/Orders/${orderId}`, null, { params: { status: status}, headers: AuthHelper.AuthHeader() })
    }
    catch (err)
    {
        console.log(err);
    }

    window.location.reload();
}