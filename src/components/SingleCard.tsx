import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';


const SingleCard = ({ text }: any) => {
    return (
        <div>
            <Container fluid className='single-Card-text'>
                <Row>
                    <Col className='copy'>Copy</Col>

                    <Col>
                        {text.textC}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SingleCard;