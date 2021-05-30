import jwt_decode from "jwt-decode";
import React, { Component } from 'react'
import { Card, Container, CardDeck, Button } from "react-bootstrap";
import axios from 'axios';
import AuthHelper from '../../Helpers/AuthHelper';
import Spinner from '../../Components/Spinner';


export default class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = { isLoaded: false, Clients: []}
      }

    componentDidMount() {
        this.renderClients();
      }

    renderClients = async() => {
        try {
          const res = await axios.get('https://localhost:44350/api/Customer', { headers: AuthHelper.AuthHeader() })
          const clients = res.data;
          console.log(clients)
          this.setState({
            isLoaded: true,
            Clients: clients
          })

        } catch (err) {
          console.log(err);
        }
      }

    render() {
        
        if (!this.state.isLoaded)
            return (<Spinner />)
        
        const clients = this.state && this.state.Clients;
        const RenderClients = clients?.map((client, i) => 
        {
            return (
                <>
                    <CardDeck>
                        <Card>
                            <Card.Body>
                                <div>Имя клиента: {client.name}</div>
                                <a href={`/Management/Customers/${client.id}/Orders/`}>Управление заказами</a>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </>
              );
        })

        return (
            <>
            {RenderClients}
            </>
        )
    }
}
