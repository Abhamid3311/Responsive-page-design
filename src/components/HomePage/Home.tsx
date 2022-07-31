import React, { useState } from 'react';
import { Breadcrumb, Button, Col, Container, Row } from 'react-bootstrap';
import CopyCard from '../CopyCard';
import TextArea from './TextArea';


const Home = () => {
    const [count, setCount] = useState<number>(0);

    return (
        <div className='home-container'>
            <Container fluid>
                <Row className="align-items-center ">
                    <Col className='pt-4'>
                        <Breadcrumb className='fs-4 '>
                            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                            <Breadcrumb.Item active href="#">
                                Writing Assistant
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>

                    <Col className='text-end'>
                        <Button className='save-btn'>save</Button>
                        <Button className='filter-btn'>Filter</Button>
                    </Col>
                </Row>
            </Container>



            <Container fluid>
                <Row className="align-items-center">
                    <Col xs lg="7">
                        <Container fluid>
                            <p className='pt-4 '>Enter input to get <span className='primary-color'>Writing Assistant</span></p>

                            <Row>
                                <Col>
                                    <p className='count'>Words Count: <input type="number" /></p>
                                </Col>
                                <Col>
                                    <div>
                                        <label htmlFor="prompt">Prompt:</label>
                                        <select name="prompt" id="prompt">
                                            <option disabled selected value="one">select</option>
                                            <option value="one">1</option>
                                            <option value="two">2</option>
                                            <option value="three">3</option>
                                        </select>
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        <label htmlFor="creativity">Creativity:</label>
                                        <select name="creativity" id="creativity">
                                            <option disabled selected value="one">select</option>
                                            <option value="writing">writing</option>
                                            <option value="reading">Reading</option>
                                            <option value="painting">Painting</option>
                                        </select>
                                    </div>
                                </Col>
                            </Row>
                            <div className='text-end'>
                                <p className='fs-5 mb-0'>
                                    <span>word: 00</span> | <span>charectar: 0/250</span>
                                </p>
                            </div>
                            <div>
                                <TextArea />
                            </div>
                        </Container>
                    </Col>

                    <Col xs lg="5">
                        <CopyCard />
                    </Col>
                </Row>
            </Container>




        </div>
    );
};

export default Home;