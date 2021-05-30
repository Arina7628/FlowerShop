import React, { Component } from 'react';
import { Form, Button, Container } from 'react-bootstrap'
import axios from 'axios';
import AuthHelper from '../Helpers/AuthHelper';

export default class AddProduct extends Component {
    handleSubmit = async event => {
        event.preventDefault();
        
        const toBase64 = file => new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });

        const base64 = await toBase64(document.getElementById("icon").files[0]).catch(e => Error(e));

        console.log(base64)

        let body = { 
            name: document.getElementById("name").value,
            description: document.getElementById("description").value,
            icon: base64,
            buyingPrice: parseInt(document.getElementById("buyingPrice").value),
            sellingPrice: parseInt(document.getElementById("sellingPrice").value),
            unitsInStock: parseInt(document.getElementById("unitsInStock").value),
            isActive: true,
            isDiscontinued: false,
            productCategoryName: "None",
            productCategoryId: "2"
        }

        try
        {
            await axios.post(`https://localhost:44350/api/Product`, body, { headers: AuthHelper.AuthHeader() })
        }
        catch
        {
        }

        window.location.reload();
      }

    render() {
        if (!AuthHelper.IsManager()){
            window.location.href = '/';
            return;
        }
        else
        return (
            <Container style={{width: '500px'}}>
                <h1> Добавление нового продукта </h1>
                <Form>
                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" />
                    </Form.Group>

                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" placeholder="Enter description" />
                    </Form.Group>

                    <Form.Group controlId="buyingPrice">
                        <Form.Label>Buying Price</Form.Label>
                        <Form.Control type="number" placeholder="Enter buying price" />
                    </Form.Group>

                    <Form.Group controlId="sellingPrice">
                        <Form.Label>Selling Price</Form.Label>
                        <Form.Control type="number" placeholder="Enter selling price" />
                    </Form.Group>

                    <Form.Group controlId="unitsInStock">
                        <Form.Label>Units In Stock</Form.Label>
                        <Form.Control type="number" placeholder="Enter units in stock" />
                    </Form.Group>

                    <Form.Group controlId="uploadFile">
                        <input type="file" id="icon" />
                    </Form.Group>

                    <Button onClick = {this.handleSubmit} variant="primary" type="submit">Добавить продукт</Button>
                </Form>
            </Container>
        )
    }
}