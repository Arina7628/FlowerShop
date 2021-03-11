import React, { Component } from 'react'
import { Nav, Container, Tab, Row, Col } from 'react-bootstrap'

export default class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt=2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Who are we</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Our contacts</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <img src="https://vidomosti-ua.com/photo/original-1300267654.JPG" />
                            <p>
                                We are cool developers, buy flowers only from us <br />
                                Fast delivery<br />
                                Beautiful bouquets<br />
                                Great mood<br />
                                It's all about us
                            </p>
                            </Tab.Pane>

                            <Tab.Pane eventKey="second">
                                    <img src="https://static.terabayt.uz/post/5b5aa9ec352d1.jpg" />
                            <p>
                                Наши ссылочки тут:<br />
                                <a href="https://vk.com/id300693008">Dima</a><br />
                                <a href="https://vk.com/id160350153">Nastya</a><br />
                                <a href="https://vk.com/bentonight">Ilya</a><br />
                                <a href="https://vk.com/arina_zel">Arina</a>
                            </p>
                            </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                    </Tab.Container> 
            </Container>
        )
    }
}