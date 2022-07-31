import React from 'react';
import { Breadcrumb, Col, Container, Row } from 'react-bootstrap';
import TextArea from './TextArea';


const Home = () => {
    return (
        <div className='home-container'>
            <Container fluid>
                <Breadcrumb className='fs-4 pt-4'>
                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active href="#">
                        Writing Assistant
                    </Breadcrumb.Item>
                </Breadcrumb>

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

                <div>
                    <TextArea />
                </div>

            </Container>


        </div>
    );
};

export default Home;