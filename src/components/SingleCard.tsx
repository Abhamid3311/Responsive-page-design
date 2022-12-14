import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';


const SingleCard = ({ text }: any) => {
    return (
        <div>
            <Container fluid className='single-Card-text'>
                <Row >
                    <Col className='copy text-center' lg="2">Copy</Col>

                    <Col lg="10">
                        {text.textC}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SingleCard;